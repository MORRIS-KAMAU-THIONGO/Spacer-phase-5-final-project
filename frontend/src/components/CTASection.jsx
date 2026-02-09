
import { FiArrowRight } from 'react-icons/fi';

const CTASection = ({ onGetStartedClick }) => {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900">
          Ready to Find Your Perfect Workspace?
        </h2>
        <p className="text-xl mb-10 text-gray-600 max-w-2xl mx-auto">
          Join thousands of professionals and businesses who have found their ideal space with Spacer.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={onGetStartedClick}
            className="bg-indigo-600 text-white px-10 py-4 rounded-lg font-semibold hover:bg-indigo-700 transition-colors flex items-center justify-center text-lg shadow-lg"
          >
            Get Started Now <FiArrowRight className="ml-2" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;