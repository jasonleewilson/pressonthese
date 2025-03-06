import type { MetaFunction } from "@remix-run/cloudflare";
import Header from "~/components/Header";
import Footer from "~/components/Footer";
import { Accordion } from "@radix-ui/react-accordion";

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
      content: "PRESSONTHESE.COM - HANDMADE. CUSTOM. DURABLE. RESUABLE.",
    },
  ];
};

export default function Faq() {
  return (
    <>
      <div className="flex flex-col min-h-screen bg-[url('/bg-marble.jpg')] w-full bg-center-bottom bg-no-repeat bg-cover">
        <Header />
        <header className='block bg-lightblack'>
          <h1 className='container mx-auto text-primary1 p-4 uppercase'>Faq</h1>
        </header>
        <main className='container mx-auto text-black grow p-4'>
          <div className='text-2xl'>
            {/* accordion */}
            <Accordion type='single' collapsible>
              {/* item1 */}
              <AccordionItem value='item-1' className='mb-2'>
                <AccordionTrigger className='bg-primary1 px-4'>
                  How fast is your turn around?
                </AccordionTrigger>
                <AccordionContent className='bg-white p-4'>
                  5-7 days
                </AccordionContent>
              </AccordionItem>

              {/* item2 */}
              <AccordionItem value='item-2' className='mb-2'>
                <AccordionTrigger className='bg-primary1 px-4'>
                  How long have you been doing nails?
                </AccordionTrigger>
                <AccordionContent className='bg-white p-4'>
                  10+ years
                </AccordionContent>
              </AccordionItem>

              {/* item3 */}
              <AccordionItem value='item-3' className='mb-2'>
                <AccordionTrigger className='bg-primary1 px-4'>
                  How much is shipping?
                </AccordionTrigger>
                <AccordionContent className='bg-white p-4'>
                  $5 USD
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}
