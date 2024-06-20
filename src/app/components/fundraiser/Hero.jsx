import React from "react";

function Hero() {
  return (
    <div className="h-screen  bg-pattern bg-gradient-to-b from-blue-900 to-blue-600 flex items-center">
      <section
        className="w-full bg-cover bg-center py-32"
        style={{
          backgroundImage:
            "url('https://plus.unsplash.com/premium_photo-1683134563505-cc5d4f20a22a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZnVuZHJhaXNlcnxlbnwwfHwwfHx8MA%3D%3D')",
          backgroundBlendMode: "overlay",
        }}
      >
        <div className="container mx-auto text-center text-white">
          <h1 className="text-5xl font-medium mb-6">Support Our Cause</h1>
          <p className="text-xl mb-12">
            Your contribution makes a difference. Join us in making a positive
            impact on our community.
          </p>
          <a
            href="#"
            className="bg-yellow-500 text-white py-4 px-12 rounded-full hover:bg-yellow-600"
          >
            Donate Now
          </a>
        </div>
      </section>
    </div>
  );
}

export default Hero;

export function Cards() {
  return (
    <section class=" bg-blue-500ray-50">
      <div class="py-10  sm:py-16 block lg:py-24 relative bg-opacity-50  z-40  ">
        <div class="relative mx-auto h-full px-4 pb-20   md:pb-10 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8">
          <div class=" absolute  top-0 -right-1/4 z-0  opacity-10 ">
            <svg
              width="800px"
              height="800px"
              viewBox="0 0 24 24"
              class="w-96 z-0  h-full    object-fill fill-g text-g"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12 6C12 5.44772 11.5523 5 11 5C10.4477 5 10 5.44772 10 6V16C10 16.5523 10.4477 17 11 17C11.5523 17 12 16.5523 12 16V6ZM9 9C9 8.44772 8.55228 8 8 8C7.44772 8 7 8.44772 7 9V16C7 16.5523 7.44772 17 8 17C8.55228 17 9 16.5523 9 16V9ZM15 9C15 8.44772 14.5523 8 14 8C13.4477 8 13 8.44772 13 9V16C13 16.5523 13.4477 17 14 17C14.5523 17 15 16.5523 15 16V9ZM18 13C18 12.4477 17.5523 12 17 12C16.4477 12 16 12.4477 16 13V16C16 16.5523 16.4477 17 17 17C17.5523 17 18 16.5523 18 16V13ZM6 15C6 14.4477 5.55228 14 5 14C4.44772 14 4 14.4477 4 15V16C4 16.5523 4.44772 17 5 17C5.55228 17 6 16.5523 6 16V15ZM21 15C21 14.4477 20.5523 14 20 14C19.4477 14 19 14.4477 19 15V16C19 16.5523 19.4477 17 20 17C20.5523 17 21 16.5523 21 16V15ZM4 18C3.44772 18 3 18.4477 3 19C3 19.5523 3.44772 20 4 20H21C21.5523 20 22 19.5523 22 19C22 18.4477 21.5523 18 21 18H4Z"
              />
            </svg>
          </div>

          <div class=" absolute -bottom-0 -left-1/4 z-0  opacity-10 ">
            <svg
              width="800px"
              height="800px"
              viewBox="0 0 256 256"
              xmlns="http://www.w3.org/2000/svg"
              class="w-48 z-0  h-full -rotate-90   object-fill fill-r text-r"
            >
              <path
                d="M32 225h12.993A4.004 4.004 0 0 0 49 220.997V138.01c0-4.976.724-5.04 1.614-.16l12.167 66.708c.397 2.177 2.516 3.942 4.713 3.942h8.512a3.937 3.937 0 0 0 3.947-4S79 127.5 80 129s14.488 52.67 14.488 52.67c.559 2.115 2.8 3.83 5.008 3.83h8.008a3.993 3.993 0 0 0 3.996-3.995v-43.506c0-4.97 1.82-5.412 4.079-.965l10.608 20.895c1.001 1.972 3.604 3.571 5.806 3.571h9.514a3.999 3.999 0 0 0 3.993-4.001v-19.49c0-4.975 2.751-6.074 6.155-2.443l6.111 6.518c1.51 1.61 4.528 2.916 6.734 2.916h7c2.21 0 5.567-.855 7.52-1.92l9.46-5.16c1.944-1.06 5.309-1.92 7.524-1.92h23.992a4.002 4.002 0 0 0 4.004-3.992v-7.516a3.996 3.996 0 0 0-4.004-3.992h-23.992c-2.211 0-5.601.823-7.564 1.834l-4.932 2.54c-4.423 2.279-12.028 3.858-16.993 3.527l2.97.198c-4.962-.33-10.942-4.12-13.356-8.467l-11.19-20.14c-1.07-1.929-3.733-3.492-5.939-3.492h-7c-2.21 0-4 1.794-4 4.001v19.49c0 4.975-1.14 5.138-2.542.382l-12.827-43.535c-.625-2.12-2.92-3.838-5.127-3.838h-8.008c-2.207 0-3.916 1.784-3.817 4.005l1.92 42.998c.221 4.969-.489 5.068-1.585.224l-15.13-66.825c-.488-2.155-2.681-3.902-4.878-3.902h-8.512a3.937 3.937 0 0 0-3.947 4s.953 77-.047 75.5-13.937-92.072-13.937-92.072C49.252 34.758 47.21 33 45 33H31.999"
                fill-rule="evenodd"
              />
            </svg>
          </div>
          <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 relative">
            <div class="max-w-xl mx-auto text-center">
              <div class="inline-flex px-4 py-1.5 mx-auto rounded-full  ">
                <p class="text-4xl font-semibold tracking-widest text-g uppercase">
                  Industries:
                </p>
              </div>
              <p class="mt-4 text-base leading-relaxed text-gray-600 group-hover:text-white">
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit..
              </p>
            </div>
            <div class="grid grid-cols-1 gap-2 mt-12 sm:grid-cols-3 lg:mt-20   ">
              <a
                href="#"
                class="transition-all  duration-1000 bg-white hover:bg-blue-500  hover:shadow-xl m-2 p-4 relative z-40 group  "
              >
                <div class=" absolute  bg-blue-500/50 top-0 left-0 w-24 h-1 z-30  transition-all duration-200   group-hover:bg-white group-hover:w-1/2  "></div>
                <div class="py-2 px-9 relative  ">
                  <svg
                    class="w-16 h-16 fill-gray-400 group-hover:fill-white"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                    id="polo-tshirt"
                  >
                    <path d="m16.962 5.841 3.582.717-.716-4.115zM12.172 2.443l-.716 4.115 3.582-.717z"></path>
                    <path d="M28.488 7.301a5.354 5.354 0 0 0-2.743-3.305c-.112-.056-2.96-1.2-4.942-1.996l.87 4.987a.52.52 0 0 1-.488.746.535.535 0 0 1-.101-.01L16.5 6.806V12a.5.5 0 1 1-1 0V6.806l-4.583.917a.518.518 0 0 1-.613-.598L11.196 2c-1.982.796-4.828 1.94-4.94 1.996a5.36 5.36 0 0 0-2.75 3.328l-1.492 6.26c-.042.175.01.359.138.486l.608.608a5.487 5.487 0 0 0 3.907 1.618c.196 0 .375-.111.464-.287l1.072-2.145c.013.292.02.584.02.876V28.48c0 .231.153.435.375.499A27.03 27.03 0 0 0 16 30c2.508 0 5.015-.34 7.402-1.022a.52.52 0 0 0 .376-.5V14.74c0-.292.006-.584.019-.876l1.073 2.145a.519.519 0 0 0 .463.287 5.487 5.487 0 0 0 3.907-1.618l.608-.608a.518.518 0 0 0 .138-.487l-1.498-6.282zM17.03 11.5c-.276 0-.505-.224-.505-.5s.219-.5.495-.5h.01a.5.5 0 0 1 0 1zm0-2c-.276 0-.505-.224-.505-.5s.219-.5.495-.5h.01a.5.5 0 0 1 0 1z"></path>
                  </svg>
                  <h3 class="mt-8 text-lg font-semibold text-black group-hover:text-white ">
                    Apparels Industry
                  </h3>
                  <p class="mt-4 text-base text-gray-600 group-hover:text-white  ">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit.
                  </p>
                </div>
              </a>

              <a
                href="#"
                class="transition-all  duration-1000 bg-white hover:bg-blue-500  hover:shadow-xl m-2 p-4 relative z-40 group  "
              >
                <div class=" absolute  bg-blue-500/50 top-0 left-0 w-24 h-1 z-30  transition-all duration-200   group-hover:bg-white group-hover:w-1/2  "></div>
                <div class="py-2 px-9 relative  ">
                  <svg
                    class="w-16 h-16 fill-gray-400 group-hover:fill-white"
                    xmlns="http://www.w3.org/2000/svg"
                    enable-background="new 0 0 64 64"
                    viewBox="0 0 64 64"
                    id="furniture"
                  >
                    <path d="M13.6 4.8v54.3c0 .4.3.8.8.8H31v-2.3H19c-.6 0-1-.5-1-1s.5-1 1-1h12V4.1H14.4C14 4.1 13.6 4.4 13.6 4.8zM29.1 38.2c0 .6-.5 1-1 1s-1-.5-1-1v-1.3c0-.6.5-1 1-1s1 .5 1 1V38.2zM29.1 25.8v6.5c0 .6-.5 1-1 1s-1-.5-1-1v-6.5c0-.6.5-1 1-1S29.1 25.3 29.1 25.8zM16.1 11c0-1.6 1.3-2.8 2.8-2.8h7.4c.6 0 1 .5 1 1 0 .6-.5 1-1 1H19c-.4 0-.8.3-.8.8v17.2c0 .6-.5 1-1 1-.6 0-1-.5-1-1V11zM49.6 4.1H33v51.5h12c.4 0 .8-.3.8-.8V9.2c0-.6.5-1 1-1s1 .5 1 1v45.5c0 1.6-1.3 2.8-2.8 2.8H33v2.3h16.6c.4 0 .8-.3.8-.8V4.8C50.4 4.4 50 4.1 49.6 4.1zM37 38.2c0 .6-.5 1-1 1s-1-.5-1-1v-1.3c0-.6.5-1 1-1s1 .5 1 1V38.2zM37 32.3c0 .6-.5 1-1 1s-1-.5-1-1v-6.5c0-.6.5-1 1-1s1 .5 1 1V32.3z"></path>
                  </svg>
                  <h3 class="mt-8 text-lg font-semibold text-black group-hover:text-white ">
                    Architectural & Furniture
                  </h3>
                  <p class="mt-4 text-base text-gray-600 group-hover:text-white">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit.
                  </p>
                </div>
              </a>

              <a
                href="#"
                class="transition-all  duration-1000 bg-white hover:bg-blue-500  hover:shadow-xl m-2 p-4 relative z-40 group  "
              >
                <div class=" absolute  bg-blue-500/50 top-0 left-0 w-24 h-1 z-30  transition-all duration-200   group-hover:bg-white group-hover:w-1/2  "></div>
                <div class="py-2 px-9 relative  ">
                  <svg
                    class="w-16 h-16 fill-gray-400 group-hover:fill-white"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 64 64"
                    id="engine"
                  >
                    <path d="M60,34H56a1,1,0,0,0-1,1v3H52V28a1,1,0,0,0-1-1H47.51l-4.7-6.58A1,1,0,0,0,42,20H35V17h3a1,1,0,0,0,1-1V12a1,1,0,0,0-1-1H26a1,1,0,0,0-1,1v4a1,1,0,0,0,1,1h3v3H24a1,1,0,0,0-.81.42L18.49,27H13a1,1,0,0,0-1,1V38H9V35a1,1,0,0,0-1-1H4a1,1,0,0,0-1,1V47a1,1,0,0,0,1,1H8a1,1,0,0,0,1-1V44h3v5a1,1,0,0,0,1,1H24.59l2.7,2.71A1,1,0,0,0,28,53H48a1,1,0,0,0,.71-.29l3-3A1,1,0,0,0,52,49V44h3v3a1,1,0,0,0,1,1h4a1,1,0,0,0,1-1V35A1,1,0,0,0,60,34ZM35.77,37.64l-5,6A1,1,0,0,1,30,44a1,1,0,0,1-.64-.23,1,1,0,0,1-.13-1.41L32.87,38H29a1,1,0,0,1-.77-1.64l5-6a1,1,0,0,1,1.54,1.28L31.13,36H35a1,1,0,0,1,.77,1.64Z"></path>
                  </svg>
                  <h3 class="mt-8 text-lg font-semibold text-black group-hover:text-white ">
                    Automotive industry
                  </h3>
                  <p class="mt-4 text-base text-gray-600 group-hover:text-white">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit.
                  </p>
                </div>
              </a>
              <a
                href="#"
                class="transition-all  duration-1000 bg-white hover:bg-blue-500  hover:shadow-xl m-2 p-4 relative z-40 group  "
              >
                <div class=" absolute  bg-blue-500/50 top-0 left-0 w-24 h-1 z-30  transition-all duration-200   group-hover:bg-white group-hover:w-1/2  "></div>
                <div class="py-2 px-9 relative  ">
                  <svg
                    class="w-16 h-16 fill-gray-400 group-hover:fill-white"
                    xmlns="http://www.w3.org/2000/svg"
                    enable-background="new 0 0 68 68"
                    viewBox="0 0 68 68"
                    id="backpack"
                  >
                    <path d="M40.81303 3.82562C38.98769 2.00029 36.56427 1 33.9964 1c-5.32124 0-9.64219 4.32095-9.64219 9.64219v1.155c.86253-.45394 1.85434-.8583 2.06251-.91783v-.23717c0-4.17656 3.40312-7.57968 7.57968-7.57968 2.02128 0 3.91881.79402 5.35221 2.22748 2.39902 2.38175 2.19713 5.48257 2.21722 5.58937-1.72462-.65657.48384.15585 1.47468.62911.19594.09278.39188.18562.58782.28872v-1.155C43.62833 8.06406 42.62798 5.64064 40.81303 3.82562zM5.42237 17.56526c.06061.0124.12664.02386.18543.03651.28198.06049.54011.1233.78118.18713.06917.01832.13073.03638.19663.05482.17668.04935.34235.09851.49618.14779.05923.01901.11827.03739.17416.05621.18883.06351.36545.12633.51808.18631.02921.00856.0574.01762.0846.02719v-.0005c2.75437.97536 4.91557 2.5021 6.36275 4.47497.20293-.49549.43072-.97845.66965-1.45555.05615-.1121.1138-.22307.17196-.3341.275-.52551.56667-1.04195.88554-1.5431.03726-.0586.07843-.11481.11632-.17309.169-.25995.33832-.51978.51915-.77275-1.35251-1.14959-3.82893-2.81631-6.825-2.81631-1.77851 0-3.53385.59015-5.23784 1.75786.05923.00944.10675.02071.1646.0304C4.94514 17.47242 5.19037 17.51773 5.42237 17.56526zM6.33284 19.91547c-.00497-.00157-.00906-.00308-.0141-.00459-.18675-.05753-.39396-.11537-.61873-.17227-.04116-.01045-.08768-.02052-.13017-.03084-.18663-.04544-.38716-.09001-.59991-.13319-.0698-.01423-.14105-.0282-.21375-.04205-.22867-.04349-.47257-.08504-.7307-.12412-.05174-.00787-.09895-.01643-.15188-.02404-.31622-.04551-.65523-.08699-1.01602-.12343-.01655-.0017-.03512-.0029-.0518-.00453-.66902 3.73099-2.54307 18.68649 8.20905 27.80336l.45249-4.8301.29898-3.21259C8.67972 36.39406 4.40799 30.6788 6.33284 19.91547zM52.04333 19.40148c.31994.50278.61262 1.02093.88856 1.54833.05671.10845.11317.21677.16806.32623.23931.47742.46735.96076.67059 1.45662 1.44114-1.96482 3.60233-3.49055 6.36275-4.47195.49819-.20595 1.27729-.45527 2.38131-.67921.30169-.06703.6186-.12884.94641-.18574-1.70619-1.16513-3.46009-1.75497-5.23614-1.75497-2.99003 0-5.46443 1.66622-6.81594 2.81631.18147.25397.35154.51481.52116.77583C51.96692 19.28963 52.00701 19.34446 52.04333 19.40148zM39.9876 24.60533c0-3.30374-2.6879-5.99164-5.99113-5.99164-1.59119 0-3.09477.62238-4.23378 1.75333-1.13095 1.14002-1.75736 2.64762-1.75736 4.23831v1.15512H39.9876V24.60533z"></path>
                    <path
                      d="M54.45019,42.19164L54.12,38.66471c-0.00044-0.00497,0.00088-0.00976,0.0005-0.01473L53.19247,28.681
                                                                                c-0.12488-1.07506-0.3414-2.15566-0.64352-3.18843c-0.1121-0.38861-0.25397-0.76343-0.3888-1.14153
                                                                                c-0.07264-0.20356-0.13023-0.41416-0.20935-0.61464c-0.40069-1.01457-0.89851-1.98037-1.46361-2.90764
                                                                                c-0.39156-0.64252-0.80831-1.27056-1.27673-1.86713c-1.87519-2.38679-4.31334-4.31988-7.04757-5.58931
                                                                                c-4.6356-2.17278-10.26822-2.3747-15.14149-0.51865l-0.00101-0.00101c-0.01208,0.00504-0.02518,0.01007-0.03827,0.0146
                                                                                c-2.2609,0.90637-4.11998,2.04992-5.84813,3.59629c-0.85854,0.7594-1.64771,1.59768-2.35022,2.49549
                                                                                c-0.00063,0.00076-0.00069,0.00183-0.00132,0.00258c-1.52573,1.94317-2.64863,4.13961-3.33747,6.52791
                                                                                c-0.30313,1.02571-0.51965,2.10531-0.64755,3.21411l-0.92513,9.94205c-0.0005,0.00642,0.0012,0.01259,0.00063,0.01901
                                                                                l-0.39685,4.2395l-1.72809,18.57093c-0.1571,1.41948,0.29407,2.82587,1.23368,3.87576C13.92127,66.39877,15.26573,67,16.67162,67
                                                                                h34.6497c1.40589,0,2.75034-0.60123,3.68995-1.6491c0.93961-1.04988,1.39078-2.45627,1.23569-3.85763L54.45019,42.19164z
                                                                                M23.74537,25.76046h2.19745v-1.15512c0-2.13854,0.8389-4.16177,2.36161-5.69656c1.53379-1.52221,3.55299-2.35758,5.69203-2.35758
                                                                                c4.44123,0,8.05364,3.61291,8.05364,8.05415v1.15512h2.19746c0.57001,0,1.03125,0.46175,1.03125,1.03125
                                                                                s-0.46124,1.03125-1.03125,1.03125h-3.22871H26.97407h-3.22871c-0.57001,0-1.03125-0.46175-1.03125-1.03125
                                                                                S23.17536,25.76046,23.74537,25.76046z M18.01305,30.95902c0.09265-0.56095,0.61231-0.94615,1.18634-0.84796
                                                                                c0.56195,0.09315,0.94162,0.62439,0.84796,1.18634c-0.25177,1.51566-0.47534,3.10232-0.66367,4.71667
                                                                                c-0.06143,0.52469-0.50656,0.91141-1.0232,0.91141c-0.03928,0-0.08057-0.00201-0.12085-0.00705
                                                                                c-0.56598-0.06596-0.97083-0.57806-0.90436-1.14404C17.52764,34.1278,17.75524,32.50741,18.01305,30.95902z M16.85692,40.01974
                                                                                c0.04633-0.56699,0.52872-0.99047,1.11283-0.94213c0.56699,0.04733,0.98895,0.54584,0.94162,1.11333
                                                                                c-0.13193,1.5932-0.24875,3.18792-0.35449,4.78364c-0.03625,0.54483-0.49045,0.96277-1.02823,0.96277
                                                                                c-0.02316,0-0.04633-0.0005-0.06949-0.00252c-0.568-0.03777-0.99802-0.52922-0.96076-1.09722
                                                                                C16.60616,43.23083,16.72298,41.62403,16.85692,40.01974z M50.81475,61.55873c-0.77747,0.85653-1.88929,1.34748-3.05146,1.34748
                                                                                H20.22964c-1.16217,0-2.27399-0.49095-3.05146-1.34748c-0.77143-0.84948-1.14908-1.99201-1.0383-3.13505
                                                                                c0.7966-8.61862,7.92776-15.12186,16.58766-15.12186h2.53684c8.64077,0,15.77293,6.50223,16.58867,15.12437
                                                                                C51.96383,59.56672,51.58617,60.70926,50.81475,61.55873z"
                    ></path>
                    <path d="M35.26438 45.36433h-2.53684c-7.58837 0-13.83631 5.69807-14.53422 13.25372-.0564.57857.12589 1.12844.51261 1.55443.39276.43304.93357.67122 1.52372.67122h27.53365c.59015 0 1.13095-.23817 1.52372-.67122.38672-.42599.569-.97586.51361-1.5494C49.08458 51.06342 42.83563 45.36433 35.26438 45.36433zM65.18973 19.2642c-.80372.08403-1.48671.18644-2.06786.29772-.53281.11361-1.02621.24031-1.45882.36954 1.91421 10.74004-2.35343 16.45807-5.43693 19.08504l.23654 2.54093.51544 5.50283C67.74394 37.93596 65.86372 23.00313 65.18973 19.2642z"></path>
                  </svg>
                  <h3 class="mt-8 text-lg font-semibold text-black group-hover:text-white ">
                    Backpacks and Umbrella
                  </h3>
                  <p class="mt-4 text-base text-gray-600 group-hover:text-white">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit.
                  </p>
                </div>
              </a>

              <a
                href="#"
                class="transition-all  duration-1000 bg-white hover:bg-blue-500  hover:shadow-xl m-2 p-4 relative z-40 group  "
              >
                <div class=" absolute  bg-blue-500/50 top-0 left-0 w-24 h-1 z-30  transition-all duration-200   group-hover:bg-white group-hover:w-1/2  "></div>
                <div class="py-2 px-9 relative  ">
                  <svg
                    class="w-16 h-16 fill-gray-400 group-hover:fill-white"
                    xmlns="http://www.w3.org/2000/svg"
                    enable-background="new 0 0 512 512"
                    viewBox="0 0 512 512"
                    id="beer-cap"
                  >
                    <path
                      d="M508.598,291.716l-20.842-72.432l-2.518-75.331c-0.1-2.966-1.51-5.733-3.852-7.557l-59.478-46.306
                                                                                l-46.306-59.478c-1.823-2.341-4.591-3.752-7.557-3.851l-75.33-2.519L220.284,3.401c-2.846-0.817-5.906-0.335-8.359,1.321
                                                                                l-62.471,42.165L78.633,72.654c-2.779,1.011-4.967,3.2-5.979,5.979l-25.767,70.82L4.723,211.924
                                                                                c-1.656,2.454-2.14,5.516-1.321,8.36l20.842,72.432l2.518,75.331c0.1,2.966,1.51,5.733,3.852,7.557l59.478,46.306l46.306,59.478
                                                                                c1.823,2.341,4.591,3.752,7.557,3.851l75.33,2.519l72.432,20.843c0.909,0.261,1.839,0.39,2.765,0.39
                                                                                c1.973,0,3.925-0.584,5.595-1.711l62.471-42.165l70.821-25.767c2.779-1.011,4.967-3.2,5.979-5.979l25.767-70.82l42.164-62.471
                                                                                C508.933,297.622,509.417,294.56,508.598,291.716z M447.847,352.377c-0.457,0.678-0.83,1.408-1.109,2.176l-24.593,67.593
                                                                                l-67.593,24.593c-0.768,0.279-1.499,0.651-2.175,1.108l-59.62,40.24l-69.136-19.895c-0.792-0.228-1.608-0.356-2.431-0.384
                                                                                l-71.889-2.403l-44.194-56.766c-0.508-0.652-1.095-1.239-1.748-1.747l-56.766-44.193l-2.403-71.891
                                                                                c-0.028-0.823-0.157-1.64-0.385-2.432l-19.894-69.135l40.24-59.619c0.457-0.678,0.83-1.408,1.109-2.176l24.593-67.593
                                                                                l67.593-24.593c0.768-0.279,1.499-0.651,2.175-1.108l59.62-40.24l69.136,19.895c0.792,0.228,1.608,0.356,2.431,0.384l71.889,2.403
                                                                                l44.194,56.766c0.508,0.652,1.095,1.239,1.748,1.747l56.766,44.193l2.403,71.891c0.028,0.823,0.157,1.64,0.385,2.432
                                                                                l19.894,69.135L447.847,352.377z"
                    ></path>
                    <path
                      d="M416.116,170.724c-8.224-15.463-18.834-29.981-31.847-42.994
                                                                                c-13.013-13.013-27.532-23.623-42.996-31.848c-0.537-0.351-1.1-0.646-1.681-0.884C271.27,59.583,184.974,70.488,127.731,127.73
                                                                                c-57.243,57.243-68.148,143.535-32.734,211.857c0.238,0.582,0.533,1.147,0.885,1.685c8.225,15.464,18.835,29.983,31.849,42.997
                                                                                c13.011,13.011,27.527,23.62,42.989,31.844c0.543,0.356,1.114,0.655,1.702,0.895c26.111,13.532,54.843,20.307,83.578,20.307
                                                                                c46.453,0,92.905-17.682,128.269-53.045c57.241-57.241,68.148-143.529,32.738-211.85
                                                                                C416.768,171.833,416.471,171.265,416.116,170.724z M395.316,174.483l-75.02,75.02l-1.675-2.245l21.139-62.336
                                                                                c1.223-3.605,0.292-7.592-2.399-10.283c-2.691-2.69-6.676-3.62-10.283-2.399l-62.337,21.14l-2.245-1.675l75.02-75.019
                                                                                c11.652,6.815,22.629,15.207,32.61,25.188C380.108,151.854,388.501,162.831,395.316,174.483z M241.392,340.802l-15.085-48.528
                                                                                c-0.977-3.143-3.438-5.604-6.581-6.58l-48.528-15.085l41.492-29.343c2.688-1.9,4.268-5.002,4.225-8.293l-0.649-50.814
                                                                                l40.728,30.394c2.638,1.968,6.076,2.514,9.192,1.456l48.127-16.32l-16.32,48.126c-1.057,3.117-0.513,6.555,1.456,9.192
                                                                                l30.394,40.729l-50.814-0.649c-3.308-0.062-6.393,1.538-8.292,4.225L241.392,340.802z M141.873,141.873
                                                                                C173.338,110.408,214.669,94.676,256,94.676c21.337,0,42.671,4.204,62.65,12.59l-72.35,72.35l-34.312-25.606
                                                                                c-3.052-2.277-7.129-2.625-10.521-0.896c-3.392,1.729-5.508,5.231-5.459,9.038l0.841,65.818l-53.743,38.006
                                                                                c-3.108,2.198-4.698,5.97-4.103,9.729c0.448,2.829,2.076,5.28,4.403,6.802l-36.141,36.141
                                                                                C82.636,259.969,94.164,189.581,141.873,141.873z M116.684,337.517l47.993-47.993l44.092,13.706l13.706,44.093l-47.992,47.991
                                                                                c-11.652-6.814-22.629-15.206-32.611-25.188C131.892,360.146,123.499,349.169,116.684,337.517z M370.127,370.127
                                                                                c-47.708,47.699-118.095,59.23-176.776,34.605l36.139-36.139c1.522,2.327,3.974,3.955,6.803,4.403
                                                                                c0.523,0.083,1.047,0.123,1.566,0.123c3.213,0,6.271-1.551,8.163-4.226l38.006-53.743l65.818,0.842
                                                                                c0.043,0.001,0.085,0.001,0.128,0.001c3.756,0,7.201-2.106,8.91-5.46c1.728-3.392,1.381-7.47-0.896-10.521L332.384,265.7
                                                                                l72.351-72.351C429.364,252.031,417.836,322.418,370.127,370.127z"
                    ></path>
                  </svg>
                  <h3 class="mt-8 text-lg font-semibold text-black group-hover:text-white ">
                    Closure and Bottle caps
                  </h3>
                  <p class="mt-4 text-base text-gray-600 group-hover:text-white">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit.
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}