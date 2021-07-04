import React,{useState} from 'react';
import isDarkColor from "is-dark-color";
import {
    CirclePicker as ColorPallet,
    SketchPicker as ColorPicker,
} from "react-color";
import {IoMdColorFill} from "react-icons/io";
import "./color-pickers.scss";
const ColorPickers = (props) => {

    const [displayColorPicker, setDisplayColorPicker] = useState(false);
    const handlePickerClick = () => {
        setDisplayColorPicker(displayColorPicker => !displayColorPicker);
    };
    const handlePickerClose = () => {
        setDisplayColorPicker(false);
    };

    return (
        <>
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
                    color={props.color}
                    onChange={updatedColor =>
                        props.setColor(updatedColor.hex)
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
                            backgroundColor: `${props.color}`,
                            boxShadow:
                                "0px 2px 8px rgba(0, 0, 0, 0.2)",
                        }}
                    >
                        <div className={"text-center p-1"}>
                            <IoMdColorFill
                                size={"32px"}
                                color={
                                    isDarkColor(props.color)
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
                            marginLeft:"30px",
                            marginTop:"-340px"

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
                            color={props.color}
                            onChange={updatedColor =>
                                props.setColor(updatedColor.hex)
                            }

                        />
                    </div>
                ) : null}
            </div>
        </>
    );
};

export default ColorPickers;

// react-color picker has issue with white background
// https://github.com/casesandberg/react-color/issues/821
