import React, { useEffect, useState } from "react"

export const CustomerList = () => {
    const [customers, assignCustomers] = useState([])
    const [totalCustomerMessage, updateMessage] = useState("")

    useEffect(
        () => {
            fetch("http://localhost:8088/customers")
                .then(res => res.json())
                .then((customerArray) => {
                    assignCustomers(customerArray)
                }
                )
        },
        []
    )

    useEffect(
        () => {
            if (customers.length === 1) {
                updateMessage("You have 1 customer.")
            } else {
                updateMessage(`You have ${customers.length} customers.`)
            }
        },
        [customers]
    )

    return (
        <>
            <div>{totalCustomerMessage}</div>
            {
            customers.slice(0, 5).map(
                (customerObject) => {
                    return <p key={`customer--${customerObject.id}`}>{customerObject.name}</p>
                })
            }
        </>
    )};