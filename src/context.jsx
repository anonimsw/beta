import axios from "axios";
import { onValue, ref } from "firebase/database";
import React, { useEffect, useState } from "react";
import { db } from "./firebase";

const Context = React.createContext();
const ContextProvider = ({ children }) => {

    const [data, setData] = useState([]);

    const getApi = () => {
        axios
            .get("https://beta-bec.onrender.com/beta")
            .then((res) => {
                setData(res.data)
            })
            .catch((err) => {
                console.log(err);
            })
    }

    // regis
    const [todos, setTodos] = useState([]);
    const [todo, setTodo] = useState("");
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [contact, setContact] = useState("");

    const clicknameChange = (e) => {
        setName(e.target.value)
    }
    const clickaddressChange = (e) => {
        setAddress(e.target.value)
    }
    const clickcontactChange = (e) => {
        setContact(e.target.value)
    }

    useEffect(() => {
        onValue(ref(db), (snapshot) => {
            setTodos([]);
            const data = snapshot.val();
            if (data !== null) {
                Object.values(data).map((todo) => {
                    setTodos((oldArray) => [...oldArray, todo]);
                });
            }
        });
    }, []);

    const writeToDatabase = () => {
        const uuid = uid();
        set(ref(db, `/${uuid}`), {
            todo,
            mp3,
            musicFlayer,
            musicName,
            musicExecutor,
            musicGenre,
            musicDesc,
            uuid,
        });

        setTodo("");
    };

    // regis

    return (
        <div>
            <Context.Provider
                value={{
                    data,
                    getApi,
                    writeToDatabase,
                    name,
                    address,
                    contact,
                    clicknameChange,
                    clickaddressChange,
                    clickcontactChange,
                }}
            >
                {children}
            </Context.Provider>
        </div>
    );
};

export { Context, ContextProvider };
