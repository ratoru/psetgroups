import { FaqCard } from "./FaqCard";

const features = [
  {
    question: "What do I have to do?",
    answer:
      "You just have to enter your class code and answer a few questions about your availability and preferences. After that, we will generate pset groups for you.",
  },
  {
    question: "How do you match me with a partner?",
    answer:
      "Based on the information you and others in your class enter, we can calculate the quality of a pairing between you and each of your classmates. Using Edmonds' blossom algorithm, we then find the most efficient way to match all partnerships in the class.",
  },
  {
    question: "Why do I have to wait to get a partner?",
    answer:
      "The more people are in the pool, the better your partner will be. Additionally, we need time to run our algorithm in order to ensure we find a good match for you.",
  },
  {
    question: "What is your methodology based on?",
    answer:
      "We conducted a survey to determine the qualities that Stanford students are looking for in their teammates, and we weight pairing results based on the trends identified in our study.",
  },
  {
    question: "Can I be paired with a friend?",
    answer:
      "Ask your instructor! The purpose of this matching site is to calculate the best possible pairings, which may not be your friend. If your instructor allows it, you can elect to match with a friend outside of this tool. Just remember, the best friends don’t make the best pset partners! (This website does)",
  },
  {
    question: "Will my professor see the data I submit?",
    answer:
      "No. All data you submit is only used for pairing you with partners, and it will never be shared with your professor or others in the class.",
  },
];

export const Faq: React.FC = () => {
  return (
    <section
      className="relative py-16 bg-white min-w-screen animation-fade animation-delay"
      id="faq"
    >
      <div className="container px-8 mx-auto sm:px-12 xl:px-5">
        <p className="text-xs font-bold text-left text-indigo-500 uppercase sm:mx-6 sm:mb-4 sm:font-bold sm:text-center sm:text-normal">
          Got a Question? We’ve got answers.
        </p>
        <h3 className="mx-0 mt-1 text-2xl font-bold text-left text-gray-800 sm:mx-6 sm:text-3xl sm:text-center md:text-4xl lg:text-5xl">
          Frequently Asked Questions
        </h3>
        {features.map((feature, index) => (
          <FaqCard
            key={index}
            question={feature.question}
            answer={feature.answer}
          />
        ))}
      </div>
    </section>
  );
};
