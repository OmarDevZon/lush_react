export const ContactUs = () => {
  return (
    <div className="sp" id="contact-us">
      <h2 className="title">Contact Us</h2>
      <h3 className="title2 my-10">WE ARE JUST A PHONE CALL AWAY!</h3>

      <h2 key="lushconstructions" className="p">- Email: contact@lushconstructions.com</h2>
      <p className="p">- Phone: 0404 289 437</p>
      <p className="p">- Address: PO BOX 821 Marrickville, NSW 2204</p>

      <p className="p mt-10">- ABN: 99 652 947 528</p>
      <p className="p">- ACN: 141 565 746</p>
      <p className="p">
        - License Number: Pls contact 0404 289 437 or email
        contact@lushconstructions.com
      </p>

      {/* contact from  */}

      <div className=" md:flex gap-10 md:mt-20 mt-10 items-end">
        <div className="md:w-1/2">
          <h3 className="title2">GET IN TOUCH</h3>
          <form
            action="https://api.web3forms.com/submit"
            method="POST"
            className="md:mt-28 mt-12 "
          >
            <div className="">
              <input
                type="hidden"
                name="access_key"
                value="a99ac5a8-4ff7-4500-80ca-fc44b389460b"
              />

              <div className="flex gap-4 items-center">
                <input
                  className="placeholder:text-md placeholder:text-base py-2 text-white border-b-2 border-[#c9c9c9] focus:border-[#f2849e]"
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Name"
                />
                <input
                  className="placeholder:text-md  placeholder:text-base py-2 border-b-2 text-white border-[#c9c9c9]  focus:border-[#f2849e]"
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                />
              </div>
              <div className=""></div>
              <div className="">
                <div className=" mt-4">
                  <textarea
                    className="placeholder:text-md  placeholder:text-base py-2 border-b-2 text-white border-[#c9c9c9]  focus:border-[#f2849e]"
                    type="text"
                    name="message"
                    id="message"
                    placeholder="Message"
                    rows="4"
                  ></textarea>
                </div>
              </div>
            </div>
            <input type="submit" value="Send" className=" py-2 bg-white" />
          </form>
        </div>

        <div className="md:w-1/2 md:mt-0 mt-10">
          <section className="">
            <div className="map-div">
              <iframe
                src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=PO%20BOX%20821%20Marrickville,%20NSW%202204+(lushconstructions)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                width="100%"
                height="350px"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                className="rounded-md"
              ></iframe>
            </div>

          </section>
        </div>
      </div>
    </div>
  );
};
