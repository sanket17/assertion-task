import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

export default function BasicDetailComponent({ setToggleModal, setData }) {
  return (
    <BasicDetailDiv className="row">
      <div className="col-4 mt-2 mb-2">
        <button className="btn btn-outline-info last-scan-button">
          last scan details
        </button>
        <div className="row mt-2">
          <div className="col-6">
            <label>Integration family :</label>
            <div className="label-value">SBC</div>
          </div>
          <div className="col-6">
            <label>application name :</label>
            <div className="label-value">Avaya SBC</div>
          </div>
          <div className="col-6">
            <label>scan ID :</label>
            <div className="label-value">F332B7</div>
          </div>
          <div className="col-6">
            <label>application date :</label>
            <div className="label-value">29.11.2020</div>
          </div>
        </div>
      </div>
      <div className="col-4 mt-2 mb-2">
        <div className="mid-section">
          <div className="mid-section-equation">risk = low</div>
          <div className="mid-numeric">34%</div>
        </div>
      </div>
      <div className="col-4 mt-2 mb-2">
        <div className="risk-level-font">
          Risk level <b>low</b>
        </div>
        <div className="mt-3">
          <button
            className="btn btn-primary w-100 summary-button-background"
            onClick={() => {
              setData([]);
              setToggleModal(true);
            }}
          >
            summary report
          </button>
        </div>
      </div>
    </BasicDetailDiv>
  );
}

const BasicDetailDiv = styled.div`
  border-style: solid;
  border-width: 2px;
  border-radius: 10px;
  border-image: linear-gradient(144.07deg, #6fdaff 12.4%, #7369fd 88.67%) 1;

  margin-left: 5%;
  margin-right: 5%;

  label {
    font-size: 11px;
    color: #afafaf;
  }

  .label-value {
    color: #666666;
    font-weight: 600;
  }

  .risk-level-font {
    font-size: 45px;
    font-weight: 100;
    b {
      background: linear-gradient(#6fdaff, #7369fd);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }

  .summary-button-background {
    background: linear-gradient(144.07deg, #6fdaff 12.4%, #7369fd 88.67%);
    height: 68px;
    font-size: 32px;
    line-height: 36px;
  }

  .mid-section {
    margin-top: 7%;
  }

  .mid-numeric {
    font-size: 40px;
    background: linear-gradient(#6fdaff, #7369fd);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  .mid-section-equation {
    font-weight: 300;
    font-size: 20px;
    line-height: 22px;
    color: #808080;
  }

  .last-scan-button {
    height: 40px;
    width: 259px;
    color: #0099e9;
    font-size: 24px;
    line-height: 28px;
  }
`;

BasicDetailComponent.prototype = {
  setToggleModal: PropTypes.func.isRequired,
  setData: PropTypes.func.isRequired,
};
