import Head from "next/head";
import Header from "/components/Header";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-dark-blue-intro font-sans">
      <Head>
        <title>Fylo</title>
        <meta name="description" content="testing website" />
      </Head>
      <header className="py-6">
        <Header />
      </header>

      <section className="content relative bg-curvy-mobile bg-contain bg-center bg-no-repeat pt-10 pb-20 after:absolute after:bottom-0 after:h-[42%] after:w-full after:bg-dark-blue-main after:content-[''] md:bg-curvy-desktop md:after:h-2/5 lg:pt-20 lg:after:h-[32%]">
        <div className="container mx-auto">
          <div className="rows-content flex flex-wrap gap-y-10">
            <div className="cols-content mx-auto">
              <div className="images-hero lg:max-w-2xl">
                <Image
                  alt="images intro hero"
                  src="/images/illustration-intro.png"
                  layout="intrinsic"
                  width={720}
                  height={534}
                />
              </div>
            </div>
            <div className="cols-content z-50 text-slate-100">
              <h1 className="title text-center text-3xl font-medium leading-normal md:text-6xl md:leading-tight lg:mx-auto lg:w-2/3 lg:text-4xl lg:leading-tight">
                All your files in one secure location, accessible anywhere.
              </h1>
              <p className="mt-5 mb-7 px-4 text-center text-base text-slate-300 md:mb-10 md:mt-8 md:text-2xl lg:mx-auto lg:mb-8 lg:mt-6 lg:w-[45%] lg:text-base">
                Fylo stores all your most important files in one secure
                location. Access them wherever you need, share and collaborate
                with friends family, and co-workers.
              </p>
              <button
                className="mx-auto block rounded-full bg-blue-gradient py-4 px-20 text-[1.1rem] font-semibold text-slate-100 hover:bg-cyan-500 md:py-5 md:text-xl lg:px-16 lg:py-3 lg:text-base"
                type="submit"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="introduction bg-dark-blue-main py-16 lg:py-24">
        <div className="container mx-auto">
          <div className="rows-introduction flex flex-wrap items-center gap-y-20 lg:justify-center lg:gap-x-20">
            <div className="cols-introduction text-center md:basis-1/2 lg:basis-1/3">
              <div className="introduction-images mx-auto mb-7">
                <Image
                  alt="card images introduction"
                  src="/images/icon-access-anywhere.svg"
                  layout="intrinsic"
                  width={100}
                  height={78}
                />
              </div>
              <h1 className="text-2xl font-semibold text-slate-50 lg:text-xl">
                Acces your files, anywhere
              </h1>
              <p className="mt-4 px-4 text-slate-300 lg:text-sm">
                The ability to use a smartphone, tablet, or computer to access
                your account means your files follow you everywhere.
              </p>
            </div>
            <div className="cols-introduction text-center md:basis-1/2 lg:basis-1/3">
              <div className="introduction-images mx-auto mb-7">
                <Image
                  alt="card images introduction"
                  src="/images/icon-security.svg"
                  layout="intrinsic"
                  width={73}
                  height={78}
                />
              </div>
              <h1 className="text-2xl font-semibold text-slate-50 lg:text-xl">
                Security you can trust
              </h1>
              <p className="mt-4 px-4 text-slate-300 lg:text-sm">
                2-factor authentication and user-controlled encryption are just
                a couple of the security features we allow to help secure your
                files.
              </p>
            </div>
            <div className="cols-introduction text-center md:basis-1/2 lg:basis-1/3">
              <div className="introduction-images mx-auto mb-7 ">
                <Image
                  alt="card images introduction"
                  src="/images/icon-collaboration.svg"
                  layout="intrinsic"
                  width={90}
                  height={78}
                />
              </div>
              <h1 className="text-2xl font-semibold text-slate-50 lg:text-xl">
                Real-time collaboration
              </h1>
              <p className="mt-4 px-4 text-slate-300 lg:text-sm">
                Securely share files and folders with friends, family and
                colleagues for live collaboration. No email attachments
                required.
              </p>
            </div>
            <div className="cols-introduction text-center md:basis-1/2 lg:basis-1/3">
              <div className="introduction-images mx-auto mb-7 ">
                <Image
                  alt="card images introduction"
                  src="/images/icon-any-file.svg"
                  layout="intrinsic"
                  width={90}
                  height={65}
                />
              </div>
              <h1 className="text-2xl font-semibold text-slate-50 lg:text-xl">
                Store any type of file
              </h1>
              <p className="mt-4 px-4 text-slate-300 lg:text-sm">
                Whether you`re sharing holidays photos or work documents, Fylo
                has you covered allowing for all file types to be securely
                stored and shared.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="productive bg-dark-blue-main pt-28 pb-16 lg:py-32">
        <div className="container mx-auto">
          <div className="rows-productive flex flex-wrap gap-y-10 lg:flex-nowrap lg:items-center lg:gap-x-16">
            <div className="cols-productive md:mx-auto lg:basis-1/2 ">
              <div className="images-productive lg:mx-auto lg:max-w-lg">
                <Image
                  alt="images productive"
                  src="/images/illustration-stay-productive.png"
                  layout="intrinsic"
                  width={615}
                  height={465}
                />
              </div>
            </div>
            <div className="cols-productive lg:basis-1/2">
              <h3 className="text-2xl font-medium text-slate-50 md:text-4xl lg:w-2/3">
                Stay productive, wherever you are
              </h3>
              <p className="my-5 text-base text-slate-300 md:text-xl lg:w-[95%] lg:text-base">
                Never let location be an issue when accessing your files. Fylo
                has you covered for all of your file storage needs.
              </p>
              <p className="text-base text-slate-300 md:text-xl lg:text-base">
                Securely share files and folders with friends, family and
                colleagues for live collaboration. No email attachments
                required.
              </p>
              <span className="mt-5 flex max-w-max cursor-pointer items-center gap-x-2 border-b border-cyn-gradient pb-2 font-medium text-cyn-gradient hover:opacity-90 md:text-xl lg:text-base">
                See how Fylo works
                <Image
                  alt="arrow"
                  src="/images/icon-arrow.svg"
                  layout="intrinsic"
                  width={25}
                  height={25}
                />
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="testimonials bg-dark-blue-main pt-20 pb-36">
        <div className="container mx-auto">
          <div className="rows-testimonial relative flex flex-wrap gap-y-8 pt-6 md:justify-center lg:flex-nowrap lg:items-center lg:gap-x-10">
            <div className="images-quotes absolute top-0 left-0 w-7 md:left-28 lg:-top-5 lg:-left-2 lg:w-14 ">
              <Image
                alt="images productive"
                src="/images/bg-quotes.png"
                layout="intrinsic"
                width="100%"
                height="100%"
              />
            </div>
            <div className="cols-testimonial z-10 md:basis-2/3 lg:basis-1/3">
              <div className="card rounded-md bg-dark-blue-testimonials p-8 shadow-lg lg:p-7">
                <p className="text-sm text-slate-300 md:text-base lg:text-[.90rem]">
                  Fylo has improved our team productivity by an order of
                  magnitude. Since making the switch our team has become a
                  well-oiled collaboration machine.
                </p>
                <div className="card-info mt-5 flex items-center gap-x-3">
                  <div className="card-images w-10 overflow-hidden rounded-full lg:w-8">
                    <Image
                      alt="card images"
                      src="/images/profile-1.jpg"
                      layout="responsive"
                      width="100%"
                      height="100%"
                    />
                  </div>
                  <div className="card-header">
                    <h3 className="text-base font-medium text-slate-50 lg:text-sm">
                      Satish Patel
                    </h3>
                    <p className="mt-1 text-xs text-slate-300 lg:m-0">
                      Founder & CEO, Huddle
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="cols-testimonial md:basis-2/3 lg:basis-1/3">
              <div className="card rounded-md bg-dark-blue-testimonials p-8 shadow-lg lg:p-7">
                <p className="text-sm text-slate-300 md:text-base lg:text-[.90rem]">
                  Fylo has improved our team productivity by an order of
                  magnitude. Since making the switch our team has become a
                  well-oiled collaboration machine.
                </p>
                <div className="card-info mt-5 flex items-center gap-x-3">
                  <div className="card-images w-10 overflow-hidden rounded-full lg:w-8">
                    <Image
                      alt="card images"
                      src="/images/profile-2.jpg"
                      layout="responsive"
                      width="100%"
                      height="100%"
                    />
                  </div>
                  <div className="card-header">
                    <h3 className="text-base font-medium text-slate-50 lg:text-sm">
                      Bruce McKenzie
                    </h3>
                    <p className="mt-1 text-xs text-slate-300 lg:m-0">
                      Founder & CEO, Huddle
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="cols-testimonial md:basis-2/3 lg:basis-1/3">
              <div className="card rounded-md bg-dark-blue-testimonials p-8 shadow-lg lg:p-7">
                <p className="text-sm text-slate-300 md:text-base lg:text-[.90rem]">
                  Fylo has improved our team productivity by an order of
                  magnitude. Since making the switch our team has become a
                  well-oiled collaboration machine.
                </p>
                <div className="card-info mt-5 flex items-center gap-x-3">
                  <div className="card-images w-10 overflow-hidden rounded-full lg:w-8">
                    <Image
                      alt="card images"
                      src="/images/profile-3.jpg"
                      layout="responsive"
                      width="100%"
                      height="100%"
                    />
                  </div>
                  <div className="card-header">
                    <h3 className="text-base font-medium text-slate-50 lg:text-sm">
                      Iva Boyd
                    </h3>
                    <p className="mt-1 text-xs text-slate-300 lg:m-0">
                      Founder & CEO, Huddle
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="features relative bg-dark-blue-main py-24">
        <div className="container mx-auto">
          <div className="rows-feature">
            <div className="content-feature absolute top-0 right-1/2 z-50 w-11/12 translate-x-1/2 rounded-lg bg-dark-blue-intro p-10 text-center shadow-3xl lg:top-14 lg:w-3/5 lg:px-16">
              <h3 className="title text-2xl font-medium text-slate-50 md:text-3xl">
                Get early access today
              </h3>
              <p className="my-5 text-slate-300 md:text-base lg:text-[.90rem]">
                It only takes a minute to sign up and our free starter tier is
                extremely generous. If you have any questions, our support team
                would be happy to help you.
              </p>
              <form
                className="mt-10 flex flex-wrap gap-y-5 lg:flex-nowrap lg:gap-x-6"
                action="/send-data-here"
              >
                <input
                  className="basis-full rounded-full py-4 px-7 lg:basis-2/3 lg:py-3"
                  type="text"
                  placeholder="email@example.com"
                />
                <button
                  className="basis-full rounded-full bg-blue-gradient py-4 px-7 font-medium text-slate-100 hover:bg-cyan-500 md:text-lg lg:basis-1/3 lg:py-3 lg:text-sm"
                  type="submit"
                >
                  Get Started For Free
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-dark-blue-footer pt-72 pb-10">
        <div className="container mx-auto">
          <div className="rows-footer lg:flex lg:flex-wrap lg:justify-between">
            <div className="cols-footer lg:mb-9 lg:basis-full">
              <div className="logo-footer lg:w-32">
                <Image
                  alt="images productive"
                  src="/images/logo.svg"
                  layout="intrinsic"
                  width={170}
                  height={50}
                />
              </div>
            </div>
            <div className="cols-footer lg:basis-auto">
              <div className="mt-9 flex items-start gap-x-6 lg:mt-0">
                <div className="w-14 translate-y-2 md:w-8 lg:w-4">
                  <Image
                    alt="images productive"
                    src="/images/icon-location.svg"
                    layout="responsive"
                    width="100%"
                    height={130}
                  />
                </div>
                <p className="text-lg text-slate-300 lg:w-80 lg:text-base">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua
                </p>
              </div>
            </div>
            <div className="cols-footer mt-5 lg:mt-0">
              <div className="flex items-center gap-x-6">
                <div className="w-5 lg:w-4">
                  <Image
                    alt="images productive"
                    src="/images/icon-phone.svg"
                    layout="responsive"
                    width="100%"
                    height="100%"
                  />
                </div>
                <p className="text-lg text-slate-300 lg:text-base">
                  +1-543-123-4567
                </p>
              </div>
              <div className="mt-6 flex items-center gap-x-6 ">
                <div className="w-5 lg:w-4">
                  <Image
                    alt="images productive"
                    src="/images/icon-email.svg"
                    layout="responsive"
                    width="100%"
                    height="100%"
                  />
                </div>
                <p className="text-lg text-slate-300 lg:text-base">
                  example@fylo.com
                </p>
              </div>
            </div>
            <div className="cols-footer mt-10 text-slate-300 lg:mt-0">
              <ul className="flex flex-col gap-y-4 text-lg lg:gap-y-3 lg:text-base">
                <li className="max-w-max cursor-pointer hover:text-slate-50">
                  About Us
                </li>
                <li className="max-w-max cursor-pointer hover:text-slate-50">
                  Jobs
                </li>
                <li className="max-w-max cursor-pointer hover:text-slate-50">
                  Press
                </li>
                <li className="max-w-max cursor-pointer hover:text-slate-50">
                  Blog
                </li>
              </ul>
            </div>
            <div className="cols-footer mt-10 text-slate-300 lg:mt-0">
              <ul className="flex flex-col gap-y-4 text-lg lg:gap-y-3 lg:text-base">
                <li className="max-w-max cursor-pointer hover:text-slate-50">
                  Contact Us
                </li>
                <li className="max-w-max cursor-pointer hover:text-slate-50">
                  Terms
                </li>
                <li className="max-w-max cursor-pointer hover:text-slate-50">
                  Privacy
                </li>
              </ul>
            </div>
            <div className="cols-footer mt-16 lg:mt-0">
              <div className="social-media flex items-center justify-center gap-x-4">
                <div className="facebook borders-debug w-10 cursor-pointer rounded-full p-2 transition-transform duration-300 ease-in-out hover:-translate-y-1">
                  <Image
                    alt="images productive"
                    src="/images/facebook.png"
                    layout="responsive"
                    width="100%"
                    height="100%"
                  />
                </div>
                <div className="twitter borders-debug w-10 cursor-pointer rounded-full p-2 transition-transform duration-300 ease-in-out hover:-translate-y-1">
                  <Image
                    alt="images productive"
                    src="/images/twitter.png"
                    layout="responsive"
                    width="100%"
                    height="100%"
                  />
                </div>
                <div className="instagram borders-debug w-10 cursor-pointer rounded-full p-2 transition-transform duration-300 ease-in-out hover:-translate-y-1">
                  <Image
                    alt="images productive"
                    src="/images/instagram.png"
                    layout="responsive"
                    width="100%"
                    height="100%"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <p className="attribution mt-8 text-center text-xs text-slate-400 lg:mt-32">
          Challenge by -
          <a
            className="hover:text-slate-200"
            href="https://www.frontendmentor.io?ref=challenge"
            rel="noreferrer"
            target="_blank"
          >
            - Frontend Mentor
          </a>
          . Coded by -
          <a
            className="hover:text-slate-200"
            href="https://github.com/JfeStudio"
          >
            - Maman
          </a>
          .
        </p>
      </footer>
    </div>
  );
}
