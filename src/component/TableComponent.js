import React, { useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import dayjs from "dayjs";
import { allScanData, purchasedData } from "../store/Data";

export default function TableComponent({ setToggleModal, setData }) {
  const [allScanFlag, setAllScanFlag] = useState(true);
  const [riskScoreAsc, setRiskScoreAsc] = useState(true);
  const [dateFlag, setDateFlag] = useState(true);
  const [idFlag, setIDFlag] = useState(true);
  const [tableData, setTableData] = useState(
    allScanFlag ? allScanData : purchasedData
  );

  const sortId = (asc) => {
    tableData.sort((a, b) => {
      if (a[1].toUpperCase() < b[1].toUpperCase()) return -1;
      if (a[1].toUpperCase() > b[1].toUpperCase()) return 1;
      return 0;
    });
    if (!asc) {
      setTableData(tableData.reverse());
    } else {
      setTableData(tableData);
    }
    setIDFlag(asc);
  };

  const sortDate = (asc) => {
    tableData.sort((a, b) =>
      dayjs(a[2], "DD/MM/YYYY HH:mm").diff(dayjs(b[2], "DD/MM/YYYY HH:mm"))
    );
    if (!asc) {
      setTableData(tableData.reverse());
    } else {
      setTableData(tableData);
    }
    setDateFlag(asc);
  };

  const sortRiskScore = (asc) => {
    tableData.sort((a, b) => a[3] - b[3]);
    if (!asc) {
      setTableData(tableData.reverse());
    } else {
      setTableData(tableData);
    }
    setRiskScoreAsc(asc);
  };

  const renderTableData = () => {
    return tableData.map((ele, index) => {
      return (
        <tr key={`${ele[0]}-${index + 1}`}>
          <td>{ele[0]}</td>
          <td>{ele[1]}</td>
          <td>{ele[2]}</td>
          <td>{`${ele[3]}%`}</td>
          <td>
            <button
              className="btn-outline-info"
              onClick={() => {
                setData(ele);
                setToggleModal(true);
              }}
            >
              view
            </button>
          </td>
        </tr>
      );
    });
  };

  return (
    <TableDiv>
      <div className="row">
        <div className="col-4">
          <div className="history-div">
            <i className="fa fa-search" aria-hidden="true"></i> history
          </div>
        </div>
        <div className="col-4">
          <div className="button-div">
            <button
              className="btn btn-link"
              onClick={() => {
                setAllScanFlag(true);
                setTableData(allScanData);
              }}
            >
              All Scans
            </button>
            <button
              className="btn btn-link"
              onClick={() => {
                setAllScanFlag(false);
                setTableData(purchasedData);
              }}
            >
              Purchased Scans
            </button>
          </div>
        </div>
        <div className="col-4">
          <div className="selection-div">
            <select
              className="form-select"
              aria-label="Default select example"
              defaultValue="SBC"
            >
              <option value="SBC">SBC</option>
            </select>
          </div>
        </div>
      </div>
      <div>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>
                <div>Application</div>
              </th>
              <th>
                <button
                  onClick={() => {
                    sortId(!idFlag);
                  }}
                >
                  Scan ID <i className={"fas fa-long-arrow-alt-up"} />
                  <i className={"fas fa-long-arrow-alt-down"} />
                </button>
              </th>
              <th>
                <button
                  onClick={() => {
                    sortDate(!dateFlag);
                  }}
                >
                  When <i className={"fas fa-long-arrow-alt-up"} />
                  <i className={"fas fa-long-arrow-alt-down"} />
                </button>
              </th>
              <th>
                <button
                  onClick={() => {
                    sortRiskScore(!riskScoreAsc);
                  }}
                >
                  Risk Score <i className={"fas fa-long-arrow-alt-up"} />
                  <i className={"fas fa-long-arrow-alt-down"} />
                </button>
              </th>
              <th>
                <div>Summary Report</div>
              </th>
            </tr>
          </thead>
          <tbody>{renderTableData()}</tbody>
        </table>
      </div>
    </TableDiv>
  );
}

const TableDiv = styled.div`
  margin-top: 30px;
  margin-left: 5%;
  margin-right: 5%;
  border-style: solid;
  border-width: 1.5px;
  border-radius: 5px;
  border-image: linear-gradient(324.16deg, #7369fd 13.74%, #292ca1 86.63%) 1;

  table {
    width: 100%;
  }

  th > i {
    margin-left: 10px;
  }

  th > div {
    padding-bottom: 5%;
  }

  th > button {
    width: 100%;
    border-style: none;
    background: transparent;
    color: white;
    padding-bottom: 5%;
  }

  th {
    height: 90px;
    background: #5d5fef;
    color: white;
    font-size: 24px;
  }

  .row > .col-4 {
    height: 96px;
    font-size: 28px;
  }

  .history-div {
    margin-top: 30px;
    color: #333366;
    i {
      color: #292ca1 !important;
    }
  }

  .button-div {
    margin-top: 30px;

    button {
      font-family: Lato;
      font-style: normal;
      font-weight: normal;
      font-size: 24px;
      line-height: 28px;
      width: 236.84px;
    }

    button:focus {
      box-shadow: none;
    }
  }

  .selection-div {
    margin-top: 30px;
    padding-left: 40%;
    .form-select {
      width: 50%;
      border-color: #5d5fef;
      color: #292ca1;
      font-family: Lato;
      font-style: normal;
      font-weight: 300;
      font-size: 20px;
      line-height: 22px;
    }
  }

  td > button {
    width: 113.68px;
    border-color: #5d5fef;
    border-width: 1px;
    background-color: transparent;
    color: #333333;
  }

  td {
    color: #333333;
    font-size: 24px;
  }
`;

TableComponent.prototype = {
  setToggleModal: PropTypes.func.isRequired,
  setData: PropTypes.func.isRequired,
};
