interface FaqCardProps {
  question: string;
  answer: string;
}

export const FaqCard: React.FC<FaqCardProps> = ({ question, answer }) => {
  return (
    <div className="p-6 mx-auto mt-10 w-full bg-white rounded-lg border border-gray-200 sm:p-8 sm:shadow md:px-12 lg:w-5/6 xl:w-2/3">
      <h3 className="text-lg font-bold text-indigo-500 sm:text-xl md:text-2xl">
        {question}
      </h3>
      <p className="mt-2 text-base text-gray-600 sm:text-lg md:text-normal">
        {answer}
      </p>
    </div>
  );
};
