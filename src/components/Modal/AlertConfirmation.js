import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "./alertConfirmation.scss";
import { AiFillCloseCircle } from "react-icons/ai";

const AlertConfirmation = dataObject => {
    ReactDOM.render(
        <Another data={dataObject} />,
        document.getElementById("app_modal")
    );
};

const Another = props => {
    const [isModalOpen, setIsModalOpen] = useState(true);
    const [title, setTitle] = useState("Title");
    const [description, setDescription] = useState("Description");
    const [icon, setIcon] = useState(
        <AiFillCloseCircle size={30} color={"red"} />
    );

    useEffect(() => {
        setTitle(props.data.title);
        setDescription(props.data.description);
        setIcon(props.data.icon);
    }, []);

    const onCloseHandler = () => {
        setIsModalOpen(false);
        ReactDOM.unmountComponentAtNode(document.getElementById("app_modal"));
    };

    const onSubmitHandler = () => {
        props.data.onConfirmation();
        onCloseHandler();
    };
    //todo onDecline method execute
    const onCancelHandler = () => {};
    if (!isModalOpen) {
        return null;
    }
    return (
        <div className={"alert-confirmation"}>
            <div className={"backdrop"} onClick={onCloseHandler}></div>
            <div className={"alert_modal bg-white  container"}>
                <div className={"alert-modal-close"}>
                    <AiFillCloseCircle size={30} onClick={onCloseHandler} />
                </div>
                <div className={"mt-1 row mt-5"}>
                    <div className={"alert-modal-icon text-center"}>{icon}</div>
                </div>
                <h1 className={"text-center"}>{title}</h1>
                <p className={"text-center"}>{description}</p>
                <div className={"mb-3 d-flex justify-content-around"}>
                    <button
                        className={"btn btn-primary col-4"}
                        onClick={onCloseHandler}
                    >
                        Close
                    </button>
                    <button
                        className={"btn btn-primary col-4"}
                        onClick={onSubmitHandler}
                    >
                        Save
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AlertConfirmation;