import Guide from "./guide";
import FeedbackComponent from "./feedbackComponent";
export default function Feedback() {
  return (
    <div className="w-full h-full bg-primary-main lg:p-24 sm:p-4 p-4 lg:py-24 sm:py-20 py-20">
      <Guide />
      <FeedbackComponent />
    </div>
  );
}
