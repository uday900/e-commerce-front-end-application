import React, { useState } from "react";
import Navbar from "../components/Navbar";

const Payment = () => {
    const [step, setStep] = useState(1); // Tracks the current step in the process
    const [paymentMethod, setPaymentMethod] = useState(""); // Tracks selected payment method
    const [address, setAddress] = useState(""); // Tracks address for cash on delivery

    const [shippingDetails, setShippingDetails] = useState({
        name: "",
        address: "",
        city: "",
        state: "",
        postalCode: "",
        phone: "",
      });
    const steps = [
        "Cart Summary",
        "Shipping Details",
        "Payment Method",
        "Order Confirmation",
    ];

    const goToNextStep = () => {
        if (step < steps.length) setStep(step + 1);
    };

    const goToPreviousStep = () => {
        if (step > 1) setStep(step - 1);
    };

    const handleShippingChange = (e) => {
        setShippingDetails({ ...shippingDetails, [e.target.name]: e.target.value });
      };
    
      const handlePaymentChange = (e) => {
        setPaymentMethod(e.target.value);
      };
    return (
        <>
            <Navbar />
            <div className="w-full max-w-4xl mx-auto p-4">
                {/* Progress Bar */}
                <div className="flex items-center space-x-10 mb-8">
                    {steps.map((stepLabel, index) => (
                        <div key={index} className="flex-1">
                            <div
                                className={`h-1 ${index + 1 === step ? "bg-[#A855F7]" : "bg-gray-300"
                                    } rounded`}
                            ></div>
                            <div className="text-center mt-2 text-sm">{stepLabel}</div>
                        </div>
                    ))}
                </div>

                {/* Step Content */}
                <div className="bg-white shadow rounded-lg p-6">
                    <h2 className="text-xl font-bold mb-4">{steps[step - 1]}</h2>
                    <div className="text-gray-600 mb-6">
                        {step === 1 && "Review your cart and proceed to payment."}
                        {step === 2 && (
                            <form className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium mb-1">Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={shippingDetails.name}
                                        onChange={handleShippingChange}
                                        className="w-full border border-gray-300 rounded px-3 py-2"
                                        placeholder="Enter your full name"
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium mb-1">Address</label>
                                    <input
                                        type="text"
                                        name="address"
                                        value={shippingDetails.address}
                                        onChange={handleShippingChange}
                                        className="w-full border border-gray-300 rounded px-3 py-2"
                                        placeholder="Enter your address"
                                    />
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium mb-1">City</label>
                                        <input
                                            type="text"
                                            name="city"
                                            value={shippingDetails.city}
                                            onChange={handleShippingChange}
                                            className="w-full border border-gray-300 rounded px-3 py-2"
                                            placeholder="City"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium mb-1">State</label>
                                        <input
                                            type="text"
                                            name="state"
                                            value={shippingDetails.state}
                                            onChange={handleShippingChange}
                                            className="w-full border border-gray-300 rounded px-3 py-2"
                                            placeholder="State"
                                        />
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium mb-1">
                                            Postal Code
                                        </label>
                                        <input
                                            type="text"
                                            name="postalCode"
                                            value={shippingDetails.postalCode}
                                            onChange={handleShippingChange}
                                            className="w-full border border-gray-300 rounded px-3 py-2"
                                            placeholder="Postal Code"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium mb-1">
                                            Phone Number
                                        </label>
                                        <input
                                            type="text"
                                            name="phone"
                                            value={shippingDetails.phone}
                                            onChange={handleShippingChange}
                                            className="w-full border border-gray-300 rounded px-3 py-2"
                                            placeholder="Phone Number"
                                        />
                                    </div>
                                </div>
                            </form>
                        )}
                        {step === 3 && (
                            <>
                                <p>Choose your preferred payment method:</p>
                                <div className="space-y-4 mt-4">
                                    <label className="block">
                                        <input
                                            type="radio"
                                            name="paymentMethod"
                                            value="Credit Card"
                                            onChange={(e) => setPaymentMethod(e.target.value)}
                                        />
                                        <span className="ml-2">Credit Card</span>
                                    </label>
                                    <label className="block">
                                        <input
                                            type="radio"
                                            name="paymentMethod"
                                            value="UPI"
                                            onChange={(e) => setPaymentMethod(e.target.value)}
                                        />
                                        <span className="ml-2">UPI</span>
                                    </label>
                                    <label className="block">
                                        <input
                                            type="radio"
                                            name="paymentMethod"
                                            value="Cash on Delivery"
                                            onChange={(e) => setPaymentMethod(e.target.value)}
                                        />
                                        <span className="ml-2">Cash on Delivery</span>
                                    </label>
                                </div>

                                {/* Additional fields based on payment method */}
                                {paymentMethod === "Credit Card" && (
                                    <div className="mt-4 space-y-4">
                                        <input
                                            type="text"
                                            placeholder="Card Number"
                                            className="w-full border rounded p-2"
                                        />
                                        <input
                                            type="text"
                                            placeholder="Cardholder Name"
                                            className="w-full border rounded p-2"
                                        />
                                        <input
                                            type="text"
                                            placeholder="Expiry Date (MM/YY)"
                                            className="w-full border rounded p-2"
                                        />
                                        <input
                                            type="text"
                                            placeholder="CVV"
                                            className="w-full border rounded p-2"
                                        />
                                    </div>
                                )}
                                {paymentMethod === "UPI" && (
                                    <div className="mt-4">
                                        <input
                                            type="text"
                                            placeholder="UPI ID"
                                            className="w-full border rounded p-2"
                                        />
                                    </div>
                                )}
                                {paymentMethod === "Cash on Delivery" && (
                                    <div className="mt-4">
                                        <textarea
                                            placeholder="Enter your delivery address"
                                            className="w-full border rounded p-2"
                                            rows="3"
                                            value={address}
                                            onChange={(e) => setAddress(e.target.value)}
                                        ></textarea>
                                    </div>
                                )}
                            </>
                        )}
                        {step === 4 && (
                            <p>Confirm your order and finish the payment process.</p>
                        )}
                    </div>

                    <div className="flex justify-between">
                        <button
                            className={`${step === 1
                                    ? "opacity-50 cursor-not-allowed"
                                    : "bg-gray-500 hover:bg-gray-600"
                                } text-white py-2 px-4 rounded`}
                            disabled={step === 1}
                            onClick={goToPreviousStep}
                        >
                            Previous
                        </button>
                        <button
                            className={`${step === steps.length
                                    ? "bg-green-500 hover:bg-green-600"
                                    : "bg-blue-500 hover:bg-blue-600"
                                } text-white py-2 px-4 rounded`}
                            onClick={goToNextStep}
                        >
                            {step === steps.length ? "Finish" : "Next"}
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Payment;
