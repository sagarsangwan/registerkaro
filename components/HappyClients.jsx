import {
  ArrowRight,
  FileText,
  Mail,
  CreditCard,
  UserCheck,
} from "lucide-react";
import Image from "next/image";
import pinterest from "../public/images/pinterest.svg";
function HappyClients() {
  return (
    <div className="w-full">
      {/* Clients Section */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Our Happy Clients
          </h2>
          <p className="text-gray-600 mb-16 max-w-2xl mx-auto">
            Professionally cultivate one-to-one customer service with robust
            ideas. Dynamically innovate resource- leveling customer service for
            state of the art customer service.
          </p>

          <div className="relative h-[300px] max-w-3xl mx-auto">
            {/* Client logos positioned in a scattered pattern */}
            <div className="absolute left-[10%] top-[10%]">
              <ClientLogo src={pinterest} alt="Dropbox" />
            </div>
            <div className="absolute left-[25%] top-[40%]">
              <ClientLogo src={pinterest} alt="Pinterest" />
            </div>
            <div className="absolute left-[45%] top-[15%]">
              <ClientLogo src={pinterest} alt="Uber" />
            </div>
            <div className="absolute left-[65%] top-[10%]">
              <ClientLogo src={pinterest} alt="Figma" />
            </div>
            <div className="absolute left-[85%] top-[15%]">
              <ClientLogo src={pinterest} alt="Asana" />
            </div>
            <div className="absolute left-[15%] top-[65%]">
              <ClientLogo src={pinterest} alt="Google" />
            </div>
            <div className="absolute left-[35%] top-[75%]">
              <ClientLogo src={pinterest} alt="Sketch" />
            </div>
            <div className="absolute left-[55%] top-[65%]">
              <ClientLogo src={pinterest} alt="Microsoft" />
            </div>
            <div className="absolute left-[75%] top-[70%]">
              <ClientLogo src={pinterest} alt="Dropbox" />
            </div>
            <div className="absolute left-[5%] top-[35%]">
              <ClientLogo src={pinterest} alt="Shopify" />
            </div>
            <div className="absolute left-[30%] top-[5%]">
              <ClientLogo src={pinterest} alt="Atlassian" />
            </div>
            <div className="absolute left-[50%] top-[40%]">
              <ClientLogo src={pinterest} alt="Trello" />
            </div>
            <div className="absolute left-[70%] top-[45%]">
              <ClientLogo src={pinterest} alt="Slack" />
            </div>
            <div className="absolute left-[90%] top-[40%]">
              <ClientLogo src={pinterest} alt="Invision" />
            </div>
            <div className="absolute left-[25%] top-[25%]">
              <ClientLogo src={pinterest} alt="GitHub" />
            </div>
          </div>

          <button className="mt-8 flex items-center gap-2 text-blue-600 font-medium mx-auto">
            Show more <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* Process Steps Section */}
      <section className="bg-orange-400 py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ProcessStep
              icon={<FileText className="w-5 h-5 text-white" />}
              text="Fill up Application Form"
            />
            <ProcessStep
              icon={<CreditCard className="w-5 h-5 text-white" />}
              text="Make Online Payment"
            />
            <ProcessStep
              icon={<UserCheck className="w-5 h-5 text-white" />}
              text="Executive will Process Application"
            />
            <ProcessStep
              icon={<Mail className="w-5 h-5 text-white" />}
              text="Get Confirm Mail"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default HappyClients;

function ClientLogo({ src, alt }) {
  return (
    <div className="bg-white rounded-full p-3 shadow-sm w-[60px] h-[60px] flex items-center justify-center">
      <Image
        src={src}
        alt={alt}
        className="w-auto h-auto max-w-[30px] max-h-[30px]"
      />
    </div>
  );
}

function ProcessStep({ icon, text }) {
  return (
    <div className="flex items-center gap-3">
      <div className="bg-orange-500 rounded-full p-3 flex items-center justify-center">
        {icon}
      </div>
      <span className="text-white font-medium">{text}</span>
    </div>
  );
}
