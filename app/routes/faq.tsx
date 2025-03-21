import type { MetaFunction } from "@remix-run/cloudflare";
import Header from "~/components/Header";
import Footer from "~/components/Footer";

// Accordion
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "~/components/ui/accordion";

export const meta: MetaFunction = () => {
  return [
    { title: "Press On These - Faq" },
    {
      name: "description",
      content: "PRESSONTHESE.COM - HANDMADE. CUSTOM. DURABLE. .REUSABLE.",
    },
    {
      property: "og:description",
      content:
        "Express yourself with handmade, custom press-on nails created by me for you.",
    },
    {
      property: "og:image",
      content: "/og-pressonthese.jpg",
    },
    {
      property: "og:url",
      content: "https://pressonthese.com/faq",
    },
    {
      property: "og:site_name",
      content: "Press On These",
    },
    {
      rel: "icon",
      type: "image/png",
      href: "/favicon-96x96.png",
      sizes: "96x96",
    },
    { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
    { rel: "shortcut icon", href: "/favicon.ico" },
    {
      rel: "apple-touch-icon",
      sizes: "180x180",
      href: "/apple-touch-icon.png",
    },
    { name: "apple-mobile-web-app-title", content: "PressOn" },
    { rel: "manifest", href: "/site.webmanifest" },
  ];
};

export default function Faq() {
  return (
    <>
      <div className='container mx-auto '>
        <Header />
      </div>

      <header className='block bg-lightblack'>
        <h1 className='container mx-auto primary-font text-3xl text-primary1 p-4 uppercase'>
          Faq
        </h1>
      </header>
      <main className='container mx-auto text-lightblack grow p-4'>
        <div className='primary-font'>
          {/* accordion */}
          <Accordion type='single' collapsible>
            {/* item1 */}
            <AccordionItem value='item-1' className='mb-2'>
              <AccordionTrigger className='bg-primary1 hover:text-white px-4 text-2xl'>
                HOW MUCH IS SHIPPING COST?
              </AccordionTrigger>
              <AccordionContent className='bg-secondary1 p-4 text-lightblack text-2xl'>
                <p>Standard shipping within the US $5.00.</p>
              </AccordionContent>
            </AccordionItem>

            {/* item2 */}
            <AccordionItem value='item-2' className='mb-2'>
              <AccordionTrigger className='bg-primary1 hover:text-white px-4 text-2xl'>
                WHAT IS THE TURN AROUND TIME?
              </AccordionTrigger>
              <AccordionContent className='bg-secondary1 p-4 text-lightblack text-2xl'>
                <p>
                  Standard 5-7 business days.
                  <br />
                  Rush 1-2 business days $15.00.
                  <br />
                  (This does not include shipping time)
                </p>
              </AccordionContent>
            </AccordionItem>

            {/* item3 */}
            <AccordionItem value='item-3' className='mb-2'>
              <AccordionTrigger className='bg-primary1 hover:text-white px-4 text-2xl'>
                DO YOU OFFER RETURNS OR EXCHANGES?
              </AccordionTrigger>
              <AccordionContent className='bg-secondary1 p-4 text-lightblack text-2xl'>
                <p>
                  All sales are final. I do not offer returns or exchanges since
                  my press ons are custom fit for your nails specifically.
                </p>
              </AccordionContent>
            </AccordionItem>

            {/* item4 */}
            <AccordionItem value='item-4' className='mb-2'>
              <AccordionTrigger className='bg-primary1 hover:text-white px-4 text-2xl'>
                WHAT IS THE CANCELLATION AND REFUND POLICY?
              </AccordionTrigger>
              <AccordionContent className='bg-secondary1 p-4 text-lightblack text-2xl'>
                <p>
                  These are made to order custom press ons. I do not start your
                  order for the first 24 hours. After 24 hours after purchase I
                  do not honor any cancellations or refunds since these are
                  custom fit for you and can not be resold.
                </p>
              </AccordionContent>
            </AccordionItem>

            {/* item5 */}
            <AccordionItem value='item-5' className='mb-2'>
              <AccordionTrigger className='bg-primary1 hover:text-white px-4 text-2xl'>
                CAN THERE BE NAIL DESIGN ALTERATIONS?
              </AccordionTrigger>
              <AccordionContent className='bg-secondary1 p-4 text-lightblack text-2xl'>
                <p>
                  You can make changes to your design in the first 24 hours.
                  Once I have started on your nails there is not a guarantee I
                  can make changes. You can always reach out to me to see.
                </p>
              </AccordionContent>
            </AccordionItem>

            {/* item6 */}
            <AccordionItem value='item-6' className='mb-2'>
              <AccordionTrigger className='bg-primary1 hover:text-white px-4 text-2xl'>
                HOW DO I SIZE MY NAILS?
              </AccordionTrigger>
              <AccordionContent className='bg-secondary1 p-4 text-lightblack text-2xl'>
                <p>
                  <strong>Sizing kit:</strong> The only way to ensure the
                  closest accuracy that the press ons will fit is with a sizing
                  kit that can be purchased for $7.00. This includes one of each
                  nail in your length and shape preference.
                </p>

                <p>
                  Another option is to measure your nails from the widest part
                  from side wall to side wall in mm. You can do this with a
                  fabric measuring tape or by placing a piece of tape across
                  your nail and drawing a line from the widest section of your
                  nail. You then will want to mark the edges and place the tape
                  next to a ruler with mm and a write down the measurements.
                </p>
              </AccordionContent>
            </AccordionItem>

            {/* item7 */}
            <AccordionItem value='item-7' className='mb-2'>
              <AccordionTrigger className='bg-primary1 hover:text-white px-4 text-2xl'>
                WHAT DOES THE PREP KIT INCLUDE?
              </AccordionTrigger>
              <AccordionContent className='bg-secondary1 p-4 text-lightblack text-2xl'>
                This includes a Makartt nail glue, mini file, block file,
                adhesive tabs, cuticle pusher and alcohol pads. You will receive
                one with each order. You can purchase an additional prep kit for
                $5.00.
              </AccordionContent>
            </AccordionItem>

            {/* item8 */}
            <AccordionItem value='item-8' className='mb-2'>
              <AccordionTrigger className='bg-primary1 hover:text-white px-4 text-2xl'>
                HOW DO I PREP MY NATURAL NAILS FOR PRESS ONS?
              </AccordionTrigger>
              <AccordionContent className='bg-secondary1 p-4 text-lightblack text-2xl'>
                You can{" "}
                <a
                  href='https://www.youtube.com/shorts/TH_UzVLEmPI'
                  className='hover:underline'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  use the prep kit
                </a>{" "}
                which will be included in your order and have everything you
                need. First you want to push back your cuticles with a cuticle
                pusher. Then you will use the file to rough up your nail and
                remove any shine. Afterwards you want to use your alcohol pad to
                clean your nail. Once cleaned you will add glue to your natural
                nail and place the press on. I recommend holding it down for a
                minimum of 30 seconds each. For the first hour I would not
                recommend getting your nails wet or applying cuticle oil. This
                will ensure maximum retention.
              </AccordionContent>
            </AccordionItem>

            {/* item9 */}
            <AccordionItem value='item-9' className='mb-2'>
              <AccordionTrigger className='bg-primary1 hover:text-white px-4 text-2xl'>
                HOW DO I REMOVE MY PRESS ONS?
              </AccordionTrigger>
              <AccordionContent className='bg-secondary1 p-4 text-lightblack text-2xl'>
                <p>
                  I recommend using{" "}
                  <a
                    href='https://www.youtube.com/shorts/gnUkFDQTDEQ'
                    className='text-black hover:text-primary1 underline hover:underline'
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    warm water in a bowl
                  </a>
                  . Add dish soap and an oil. Example: cuticle oil, coconut oil
                  etc. also apply cuticle oil around your press on. You then
                  will place your fingers in the warm soapy water for 10
                  minutes. You then should be able to use your cuticle pusher
                  and gently pop off your press ons.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </main>

      <Footer />
    </>
  );
}
