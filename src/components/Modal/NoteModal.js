import React, { useState } from "react";
import Modal from "react-modal";
import { IoCloseSharp } from "react-icons/io5";
import { IoMdColorFill } from "react-icons/io";
import isDarkColor from "is-dark-color";
import {
    CirclePicker as ColorPallet,
    SketchPicker as ColorPicker,
} from "react-color";
import "./NoteModal.scss";

Modal.setAppElement("#root");

const NoteModal = ({ isModalOpen, closeModal }) => {
    const [color, setColor] = useState("#FFC971");
    const [displayColorPicker, setDisplayColorPicker] = useState(false);
    const handlePickerClick = () => {
        setDisplayColorPicker(displayColorPicker => !displayColorPicker);
    };
    const handlePickerClose = () => {
        setDisplayColorPicker(false);
    };

    const customStyles = {
        overlay: {
            backgroundColor: "#00000070",
        },
        content: {
            minHeight: "550px",
            minWidth: "754px",
            border: "solid 1px #ddd",
            borderRadius: "20px",
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            marginRight: "-50%",
            transform: "translate(-50%, -50%)",
        },
    };
    const handleCloseModal = () => {
        closeModal(false);
    };
    const afterOpenModal = () => {
        console.log("after modal open");
    };

    return (
        <Modal
            isOpen={isModalOpen}
            onAfterOpen={afterOpenModal}
            onRequestClose={handleCloseModal}
            style={customStyles}
            contentLabel="Example Modal"
        >
            <div className={"container custom-modal"}>
                <p className={"w-100 text-center note-title"}>New Note</p>
                <IoCloseSharp className={"note-close"} onClick={closeModal} />
                <form>
                    <p className={"note-date mt-4"}>January 12, 2020</p>
                    <div className="mb-3">
                        <label
                            htmlFor="exampleInputEmail1"
                            className="form-label"
                        >
                            Note Title
                        </label>
                        <input
                            type="email"
                            className="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                        />
                        {/*<div id="" className="form-text">We'll never share your email with anyone else.</div>*/}
                    </div>
                    <div className="mb-3">
                        <label
                            htmlFor="exampleInputPassword1"
                            className="form-label"
                        >
                            Note Details
                        </label>
                        <textarea
                            type="password"
                            className="form-control"
                            id="exampleInputPassword1"
                            style={{ minHeight: "158px" }}
                        />
                    </div>
                    <div className="mb-4 form-check">
                        <input
                            type="checkbox"
                            className="form-check-input"
                            id="exampleCheck1"
                        />
                        <label
                            className="form-check-label"
                            htmlFor="exampleCheck1"
                        >
                            {" "}
                            Make this note star
                        </label>
                    </div>
                    <div className={"mb-3 d-flex"}>
                        <div>
                            <ColorPallet
                                width={"330px"}
                                colors={[
                                    "#FFFFFF",
                                    "#01D4FF",
                                    "#FF9B73",
                                    "#B692FE",
                                    "#E4EE90",
                                    "#FFC971",
                                ]}
                                color={color}
                                onChange={updatedColor =>
                                    setColor(updatedColor.hex)
                                }
                            />
                        </div>
                        {/*custom color picker*/}
                        <div className={" custom-color-picker"}>
                            <div
                                onClick={handlePickerClick}
                                style={{
                                    background: "#fff",
                                    cursor: "pointer",
                                    marginLeft: "14px",
                                }}
                            >
                                <div
                                    style={{
                                        width: "40px",
                                        height: "40px",
                                        borderRadius: "50%",
                                        backgroundColor: `${color}`,
                                        boxShadow:
                                            "0px 2px 8px rgba(0, 0, 0, 0.2)",
                                    }}
                                >
                                    <div className={"text-center p-1"}>
                                        <IoMdColorFill
                                            size={"32px"}
                                            color={
                                                isDarkColor(color)
                                                    ? "white"
                                                    : "black"
                                            }
                                        />
                                    </div>
                                </div>
                            </div>
                            {displayColorPicker ? (
                                <div
                                    style={{
                                        position: "absolute",
                                        zIndex: "2",
                                        marginLeft:"50px",
                                        marginTop:"-200px"

                                    }}
                                >
                                    <div
                                        style={{
                                            position: "fixed",
                                            top: "0px",
                                            right: "0px",
                                            bottom: "0px",
                                            left: "0px",
                                        }}
                                        onClick={handlePickerClose}
                                    />
                                    <ColorPicker
                                        disableAlpha={true}
                                        color={color}
                                        onChange={updatedColor =>
                                            setColor(updatedColor.hex)
                                        }

                                    />
                                </div>
                            ) : null}
                        </div>
                        <div className={"ms-auto"}>
                            <button className={"btn btn-lg btn-dark"} >Save</button>
                        </div>
                    </div>
                                </form>
            </div>
        </Modal>
    );
};

export default NoteModal;

// react-color picker has issue with white background
// https://github.com/casesandberg/react-color/issues/821
