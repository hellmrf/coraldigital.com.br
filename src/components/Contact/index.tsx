import NewsLatterBox from "./NewsLatterBox";
import Link from "next/link";
import { FaWhatsapp, FaEnvelope, FaLinkedin, FaInstagram, FaFacebook, FaFacebookMessenger, FaPhone, FaTelegram, FaTty } from "react-icons/fa";

const contactData = [
  {
    icon: FaWhatsapp,
    alt: "WhatsApp",
    link: "https://api.whatsapp.com/send?phone=5531971352054&text=Olá!%20Gostaria%20de%20mais%20informações.%20Vim%20pelo%20site.",
    color: "#25D366",
  },
  {
    icon: FaEnvelope,
    alt: "E-mail",
    link: "mailto:coral@coraldigital.com.br",
    // color: "#ff0000",
  },
  {
    icon: FaLinkedin,
    alt: "LinkedIn",
    link: "https://www.linkedin.com/company/coral-digital-ai",
    color: "#2867b2",
  },
  {
    icon: FaInstagram,
    alt: "Instagram",
    link: "https://www.instagram.com/coraldigitalai",
    color: "#e1306c",
  },
  {
    icon: FaFacebook,
    alt: "Instagram",
    link: "https://www.facebook.com/coraldigitalai",
    color: "#4267b2",
  },
  {
    icon: FaFacebookMessenger,
    alt: "Instagram",
    link: "https://www.messenger.com/t/coraldigitalai",
    color: "#006aff",
  },
  // {
  //   icon: FaPhone,
  //   alt: "Instagram",
  //   link: "https://www.instagram.com/coraldigitalai",
  // },
  {
    icon: FaTelegram,
    alt: "Instagram",
    link: "https://t.me/coraldigitalai",
    color: "#0088cc",
  },
  // {
  //   icon: FaTty,
  //   alt: "Ligar",
  //   link: "",
  // },
];

const Contact = () => {
  return (
    <section id="contact" className="overflow-hidden py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div
              className="mb-12 rounded-xs bg-white px-8 py-11 shadow-three dark:bg-gray-dark sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
              data-wow-delay=".15s"
            >
              <h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
                Entre em contato!
              </h2>
              <p className="mb-12 text-base font-medium text-body-color">
                Vamos conversar sobre a melhor opção pra você!
              </p>

              <div className="w-full flex items-center gap-8 align-middle justify-center mb-8">
                {
                  contactData.map(data => {
                    const Icon = data.icon;
                    return (
                      <Link
                        key={data.link}
                        href={data.link}
                        target="_blank"
                        className="text-black dark:text-white transition-colors duration-300 ease-in-out hover:scale-120 transform "
                        rel="noopener noreferrer"
                        aria-label={data.alt}
                        title={data.alt}
                      >
                        <Icon className={`w-10 h-10`}/>
                      </Link>
                    );
                  })
                }
              </div>
              {/* <form>
                <div className="-mx-4 flex flex-wrap">
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="name"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Your Name
                      </label>
                      <input
                        type="text"
                        placeholder="Enter your name"
                        className="border-stroke w-full rounded-xs border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-hidden focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4 md:w-1/2">
                    <div className="mb-8">
                      <label
                        htmlFor="email"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Your Email
                      </label>
                      <input
                        type="email"
                        placeholder="Enter your email"
                        className="border-stroke w-full rounded-xs border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-hidden focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                      />
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <div className="mb-8">
                      <label
                        htmlFor="message"
                        className="mb-3 block text-sm font-medium text-dark dark:text-white"
                      >
                        Your Message
                      </label>
                      <textarea
                        name="message"
                        rows={5}
                        placeholder="Enter your Message"
                        className="border-stroke w-full resize-none rounded-xs border bg-[#f8f8f8] px-6 py-3 text-base text-body-color outline-hidden focus:border-primary dark:border-transparent dark:bg-[#2C303B] dark:text-body-color-dark dark:shadow-two dark:focus:border-primary dark:focus:shadow-none"
                      ></textarea>
                    </div>
                  </div>
                  <div className="w-full px-4">
                    <button className="rounded-xs bg-primary px-9 py-4 text-base font-medium text-white shadow-submit duration-300 hover:bg-primary/90 dark:shadow-submit-dark">
                      Submit Ticket
                    </button>
                  </div>
                </div>
              </form> */}
            </div>
          </div>
          {/* <div className="w-full px-4 lg:w-5/12 xl:w-4/12">
            <NewsLatterBox />
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Contact;
