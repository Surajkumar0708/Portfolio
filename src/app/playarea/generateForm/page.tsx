"use client";

import React from "react";
import strings from "../../../strings.json";

import "./generate-form.css";

const GenerateForm = () => {
  const [howManyInputs, setHowManyInputs] = React.useState("");
  const [inputValue, setInputValue] = React.useState("");
  const [labelValue, setLabelValue] = React.useState("");
  const [typeOfInputs, setTypeOfInputs] = React.useState([]);
  const [typeOfLabels, setTypeOfLabels] = React.useState([]);
  const [isGenerateForm, setIsGenerateForm] = React.useState(false);
  const [showFormData, setShowFormData] = React.useState(false);

  const [formData, setFormData] = React.useState<any>({});

  const getFormData = (value: any, i: number) => {
    setFormData((prev: any) => ({ ...prev, [i]: [value] }));
  };

  const getNumberOfInputToBeRender = (e: any) => {
    setHowManyInputs(e.target.value);
  };

  const getTypeOfInputs = (e: any) => {
    const { name, value } = e.target;
    if (name === strings.labelTagName) {
      setLabelValue(value);

      // const typesOflabel = typesOfData(value);
      const typesOflabel = value
        .split(",")
        .map((name: string) => name.trim().toUpperCase());
      setTypeOfLabels(typesOflabel);
    } else {
      setInputValue(value);
      // const typesOfInputs = typesOfData(value);
      const typesOfInputs = value.split(",").map((name: string) => name.trim());
      setTypeOfInputs(typesOfInputs);
    }
  };

  const submitForm = (e: any) => {
    e.preventDefault();
    setShowFormData(true);
  };

  const clearForm = () => {
    setHowManyInputs("");
    setInputValue("");
    setLabelValue("");
    setTypeOfInputs([]);
    setTypeOfLabels([]);
    setIsGenerateForm(false);
    setShowFormData(false);
    setFormData({});
  };

  const renderForm = () => {
    return (
      <div className="form_data">
        {Object.entries(formData).map((key: any, i: any) => (
          <h2 key={i}>
            <strong>{typeOfLabels[key[0]] || `input - ${+key[0] + 1}`}</strong>{" "}
            : {key[1]}
          </h2>
        ))}
      </div>
    );
  };

  const resetForm = () => {
    setShowFormData(false);
    setFormData({});
  };
  const generateForm = () => {
    return (
      <form
        onSubmit={submitForm}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full text-left"
      >
        {howManyInputs &&
          Array.from({ length: parseInt(howManyInputs) }).map(
            (_form: any, i: number) => {
              const isRadioBtn =
                typeOfInputs[i] === "radio"
                  ? "w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  : "to-generate-forms shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline";
              const isRadioBtnTrue = typeOfInputs[i] === "radio";
              return (
                <div key={i}>
                  {!isRadioBtnTrue && (
                    <div className="mb-2">
                      <label
                        className="block text-gray-700 text-sm font-bold mb-1"
                        htmlFor={`index${i}`}
                      >
                        {typeOfLabels[i] || `Input - ${i + 1}`}
                      </label>
                      <input
                        id={`index${i}`}
                        className={isRadioBtn}
                        type={typeOfInputs[i] || "text"}
                        onChange={(e) => getFormData(e.target.value, i)}
                        value={formData[i] !== undefined ? formData[i][0] : ""}
                      />
                    </div>
                  )}
                  {isRadioBtnTrue && (
                    <div className="mb-2">
                      <h1 className="block text-gray-700 text-sm font-bold mb-1">
                        {typeOfLabels[i]}
                      </h1>
                      <div className="radio_btns">
                        <div>
                          <label
                            className="block text-gray-700 text-sm font-bold mb-1"
                            htmlFor={`index${i}`}
                          >
                            {"Male"}
                          </label>
                          <input
                            name={typeOfLabels[i]}
                            id={`index${i}`}
                            className={isRadioBtn}
                            type={typeOfInputs[i] || "text"}
                            onChange={(e) =>
                              getFormData(e.target.checked && `Male`, i)
                            }
                          />
                        </div>
                        <div>
                          <label
                            className="block text-gray-700 text-sm font-bold mb-1"
                            htmlFor={`index${i}`}
                          >
                            {`Female`}
                          </label>
                          <input
                            name={typeOfLabels[i]}
                            id={`index${i}`}
                            className={isRadioBtn}
                            type={typeOfInputs[i] || "text"}
                            onChange={(e) =>
                              getFormData(e.target.checked && `Female`, i)
                            }
                          />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            }
          )}
        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-4 my-1 rounded">
          {strings.submitForm}
        </button>
        <button
          className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-4 my-1 ms-2 rounded"
          onClick={resetForm}
          type="button"
        >
          {strings.resetForm}
        </button>
      </form>
    );
  };

  const generateFormBtn = () => {
    howManyInputs && setIsGenerateForm(true);
  };
  return (
    <React.Fragment>
      <h2 className="generate_header">Generate Form</h2>
      <p className="generateFormDesc">{strings.generateFormDescription}</p>
      <div className="form_box">
        <div className="left_form_box">
          <div>
            <label
              htmlFor="to-generate-forms"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              {strings.generateFormText}
            </label>
            <input
              className="shadow appearance-none border rounded py-1 px-2 my-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
              onChange={getNumberOfInputToBeRender}
              id="to-generate-forms"
              type="number"
              value={howManyInputs}
            />
          </div>
          <div>
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="input-details"
            >
              {strings.labelName}
            </label>
            <textarea
              className="to-generate-forms focus:outline-none focus:shadow-outline border rounded p-1 shadow"
              id="input-details"
              name={strings.labelTagName}
              cols={30}
              rows={4}
              onChange={getTypeOfInputs}
              value={labelValue}
            ></textarea>
          </div>
          <div>
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="input-details"
            >
              {strings.inputType}
            </label>
            <textarea
              className="to-generate-forms focus:outline-none focus:shadow-outline border rounded p-1 shadow"
              id="input-details"
              name={strings.inputTagName}
              cols={30}
              rows={4}
              onChange={getTypeOfInputs}
              value={inputValue}
            ></textarea>
          </div>
          <div>
            <button
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-4 m-1 rounded"
              onClick={generateFormBtn}
            >
              {strings.generateFormBtn}
            </button>
            <button
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-4 m-1 rounded"
              onClick={clearForm}
            >
              {strings.clearForm}
            </button>
          </div>
        </div>

        {showFormData && renderForm()}

        <div className="flex flex-row justify-center items-center generated_form">
          {howManyInputs && isGenerateForm && generateForm()}
        </div>
      </div>
    </React.Fragment>
  );
};

export default GenerateForm;
