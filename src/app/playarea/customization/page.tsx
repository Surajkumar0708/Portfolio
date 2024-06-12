"use client";

import React from "react";
import { customizationSliceActions } from "@/components/store/slices/customizationSlice/customizationSlice";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";

import "./customization.css";

const CustomizeForm = () => {
  const dispatch = useDispatch();
  const { bodyColor, bodyTextColor } = useSelector(
    (state: any) => state.custSlice.formValues
  );
  const formValues = useSelector((state: any) => state.custSlice.formValues);
  const [custFormValues, setCustFormValue] = React.useState<any>({
    headerColor: formValues.headerColor,
    headerLogoName: formValues.headerLogoName,
    headerTextColor: formValues.headerTextColor,
    reOrderNavLinks: formValues.reOrderNavLinks,
    profilePic: formValues.profilePic,
    bodyColor: formValues.bodyColor,
    bodyTextColor: formValues.bodyTextColor,
  });

  const getInputValues = (e: any) => {
    const { name, value } = e.target;
    const isProfilePic = name === "profilePic";
    let file = "";
    if (isProfilePic) {
      file = URL.createObjectURL(e.target.files[0]);
    }
    setCustFormValue((prev: any) => ({
      ...prev,
      [name]: isProfilePic ? file : value,
    }));
  };

  const submitFormChanges = (e: any) => {
    e.preventDefault();
    dispatch(customizationSliceActions.setCustFormVal(custFormValues));
    Swal.fire({
      text: "The Changes has been applied successfully!",
      icon: "success",
      confirmButtonColor: "red",
      confirmButtonText: "Ok",
    });
  };

  const resetCustomization = () => {
    const custFormValues = {
      headerColor: "",
      headerLogoName: "",
      headerTextColor: "",
      reOrderNavLinks: "",
      profilePic: "",
      bodyColor: "",
      bodyTextColor: "",
    };
    setCustFormValue(custFormValues);
    dispatch(customizationSliceActions.resetCustFormVal(custFormValues));
  };

  return (
    <form
      style={{ backgroundColor: bodyColor, color: bodyTextColor }}
      onSubmit={submitFormChanges}
    >
      <div className="form_container">
        <div>
          <h3>Changes for Headers</h3>
          <div className="m-2">
            <label
              className="block text-gray-700 text-sm font-bold mb-1"
              htmlFor=""
            >
              Header color
            </label>
            <input
              name="headerColor"
              className="to-generate-forms shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              onChange={getInputValues}
              value={custFormValues?.headerColor}
            />
          </div>
          <div className="m-2">
            <label
              className="block text-gray-700 text-sm font-bold mb-1"
              htmlFor=""
            >
              Header Logo Name
            </label>
            <input
              name="headerLogoName"
              className="to-generate-forms shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              onChange={getInputValues}
              value={custFormValues?.headerLogoName}
            />
          </div>
          <div className="m-2">
            <label
              className="block text-gray-700 text-sm font-bold mb-1"
              htmlFor=""
            >
              Header Text Color
            </label>
            <input
              name="headerTextColor"
              className="to-generate-forms shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              onChange={getInputValues}
              value={custFormValues?.headerTextColor}
            />
          </div>
          <div className="m-2">
            <label
              className="block text-gray-700 text-sm font-bold mb-1"
              htmlFor=""
            >
              Can re-order the nav links {`(Ex:- 1: play area)`}
            </label>
            <textarea
              name="reOrderNavLinks"
              className="to-generate-forms shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              onChange={getInputValues}
              placeholder={`1: play area, \n2: Profile,\n3: Project,`}
              rows={5}
              cols={30}
              value={custFormValues?.reOrderNavLinks}
            />
          </div>
          <div className="m-2">
            <label
              className="block text-gray-700 text-sm font-bold mb-1"
              htmlFor=""
            >
              Provide GitHub Link
            </label>
            <input
              name="GitHub"
              className="to-generate-forms shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              onChange={getInputValues}
              value={custFormValues?.GitHub}
            />
          </div>
          <div className="m-2">
            <label
              className="block text-gray-700 text-sm font-bold mb-1"
              htmlFor=""
            >
              Provide Instagram
            </label>
            <input
              name="Instagram"
              className="to-generate-forms shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              onChange={getInputValues}
              value={custFormValues?.Instagram}
            />
          </div>
          <div className="m-2">
            <label
              className="block text-gray-700 text-sm font-bold mb-1"
              htmlFor=""
            >
              Provide LinkedIn
            </label>
            <input
              name="LinkedIn"
              className="to-generate-forms shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              onChange={getInputValues}
              value={custFormValues?.LinkedIn}
            />
          </div>
        </div>
        <div>
          <h3>Changes for Body</h3>
          <div className="m-2">
            <label
              className="block text-gray-700 text-sm font-bold mb-1"
              htmlFor=""
            >
              Please upload your picture
            </label>
            <input
              name="profilePic"
              className="to-generate-forms shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              onChange={getInputValues}
              type="file"
              placeholder="Upload your Picture"
            />
          </div>
          <div className="m-2">
            <label
              className="block text-gray-700 text-sm font-bold mb-1"
              htmlFor=""
            >
              Text 1 for profile
            </label>
            <input
              name="text1"
              className="to-generate-forms shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              onChange={getInputValues}
              type="text"
            />
          </div>
          <div className="m-2">
            <label
              className="block text-gray-700 text-sm font-bold mb-1"
              htmlFor=""
            >
              Text 2 for profile
            </label>
            <input
              name="text2"
              className="to-generate-forms shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              onChange={getInputValues}
              type="text"
            />
          </div>
          <div className="m-2">
            <label
              className="block text-gray-700 text-sm font-bold mb-1"
              htmlFor=""
            >
              Choose color for body
            </label>
            <input
              name="bodyColor"
              className="to-generate-forms shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              onChange={getInputValues}
              type="text"
              value={custFormValues?.bodyColor}
            />
          </div>
          <div className="m-2">
            <label
              className="block text-gray-700 text-sm font-bold mb-1"
              htmlFor=""
            >
              Please provide color body text
            </label>
            <input
              name="bodyTextColor"
              className="to-generate-forms shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              onChange={getInputValues}
              type="text"
              value={custFormValues?.bodyTextColor}
            />
          </div>
          <div className="m-2">
            <label
              className="block text-gray-700 text-sm font-bold mb-1"
              htmlFor=""
            >
              Please provide color for Project Area
            </label>
            <input
              name="projectColor"
              className="to-generate-forms shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              onChange={getInputValues}
              type="text"
              value={custFormValues?.projectColor}
            />
          </div>
        </div>
        <div>
          <h3>Changes for Footer</h3>
          <div className="m-2">
            <label
              className="block text-gray-700 text-sm font-bold mb-1"
              htmlFor=""
            >
              Footer color
            </label>
            <input
              name="footerColor"
              className="to-generate-forms shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              onChange={getInputValues}
              value={custFormValues?.footerColor}
            />
          </div>
          <div className="m-2">
            <label
              className="block text-gray-700 text-sm font-bold mb-1"
              htmlFor=""
            >
              Footer text color
            </label>
            <input
              name="footerTextColor"
              className="to-generate-forms shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              onChange={getInputValues}
              value={custFormValues?.footerTextColor}
            />
          </div>
        </div>
      </div>
      <div className="p-2 form_btns">
        <button className="mx-2 bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-4 my-1 rounded">
          Submit
        </button>
        <button
          type="button"
          onClick={resetCustomization}
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-4 my-1 rounded"
        >
          Reset
        </button>
      </div>
    </form>
  );
};

export default CustomizeForm;
