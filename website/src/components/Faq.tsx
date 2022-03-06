import { FaqCard } from './FaqCard';

const features = [
  {
    question: 'How does it work?',
    answer:
      'You just have to enter your class code and answer a few questions about your availability and preferences. After that we will generate pset groups for you.',
  },
  {
    question: 'Why do I have to wait to get a partner?',
    answer:
      'The more people are in the pool, the better your partner will be. Additionally, we need time to run our algorithm in order to ensure we find a good match for you.',
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
