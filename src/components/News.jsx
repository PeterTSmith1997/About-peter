const News = () => {
  return (
    <section className="p-6 bg-white shadow-md rounded-lg mt-4">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Latest News</h2>
      <ul className="space-y-4 text-gray-700">
        <li className="flex items-center">
          <span className="text-sm text-gray-500 mr-2">[Oct. 2024]</span>
          <span className="font-medium">Started PhD</span>
        </li>
        <li className="flex items-center">
          <span className="text-sm text-gray-500 mr-2">[Jun. 2024]</span>
          <span className="font-medium">
            Presented at ACR 24, Madrid, Spain
          </span>
        </li>
      </ul>
    </section>
  );
};

export default News;
