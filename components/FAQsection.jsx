import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  "Can I recover deleted files from desktop with this software?",
  "Can I recover deleted files from desktop with this software?",
  "Can I recover deleted files from desktop with this software?",
  "Can I recover deleted files from desktop with this software?",
  "Can I recover deleted files from desktop with this software?",
];
function FAQsection() {
  return (
    <div className="bg-gray-100 py-16 px-4 md:px-20 text-center">
      <p className="text-sm text-orange-500 font-semibold">FAQ</p>
      <h2 className="text-3xl font-bold text-gray-800 mb-6">
        Frequent Ask Questions
      </h2>

      <div className="max-w-2xl mx-auto space-y-4">
        {faqs.map((question, index) => (
          //   <div
          //     key={index}
          //     className="flex items-center justify-between p-4 bg-white rounded-lg shadow-md border-l-4 border-gradient"
          //   >
          //     <p className="text-gray-800">{question}</p>
          //     <ChevronRight className="text-gray-600" />
          //   </div>
          <Accordion
            type="single"
            key={index}
            className="rounded-lg shadow-md border-l-4 border-gradient p-y-2"
            collapsible
          >
            <AccordionItem value="item-1">
              <AccordionTrigger className="ps-1">{question}</AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        ))}
      </div>

      {/* {!showAll && (
        <Button
          onClick={() => setShowAll(true)}
          className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 flex items-center"
        >
          Show more <ChevronRight className="ml-2" />
        </Button>
      )} */}
    </div>
  );
}

export default FAQsection;
