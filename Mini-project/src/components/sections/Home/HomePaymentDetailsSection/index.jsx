import React from "react";
import PlanCard from "../../../shared/PaymentDetailCards";

const HomePaymentDetailsSection = () => {
  return (
    <div className="bg-[#02070f] text-amber-50 py-16 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        <PlanCard
          icon="https://evoluxia-theme.myshopify.com/cdn/shop/files/Layer_1_5.png?v=1702532057&width=1500"
          price="Free"
          title="/MONTH"
          description="7 Days Trial Pack"
          features={[
            { text: "Donec vel dapi dsaetus.", included: true },
            { text: "Nulla comm tis.", included: true },
            { text: "Phasellus eu codssnquat", included: false },
            { text: "Olamcorper vucus.", included: false },
            { text: "Nunc at vodsd lutp bero.", included: false },
            { text: "Racoon oombu", included: false },
          ]}
        />

        <PlanCard
          className="mt-[60px]"
          icon="https://evoluxia-theme.myshopify.com/cdn/shop/files/Layer_1_11.png?v=1703566922&width=1500"
          price="$39"
          title="/MONTH"
          description=""
          features={[
            { text: "Donec vel dapi dsaetus.", included: true },
            { text: "Nulla comm tis.", included: true },
            { text: "Phasellus eu codssnquat", included: true },
            { text: "Olamcorper vucus.", included: true },
            { text: "Nunc at vodsd lutp bero.", included: false },
            { text: "Racoon oombu", included: false },
          ]}
        />

        <PlanCard
          icon="https://evoluxia-theme.myshopify.com/cdn/shop/files/Layer_1_6.png?v=1702543380&width=1500"
          price="$49"
          title="/MONTH"
          description=""
          features={[
            { text: "Donec vel dapi dsaetus.", included: true },
            { text: "Nulla comm tis.", included: true },
            { text: "Phasellus eu codssnquat", included: true },
            { text: "Olamcorper vucus.", included: true },
            { text: "Nunc at vodsd lutp bero.", included: true },
            { text: "Racoon oombu", included: true },
          ]}
        />
      </div>
    </div>
  );
};

export default HomePaymentDetailsSection;
