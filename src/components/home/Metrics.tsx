import AnimateIntoView from "../reusable/AnimateIntoView";

type Metric = {
  id: number;
  title: string;
  extension: string;
};

function Metrics() {
  const metrics: Metric[] = [
    {
      id: 1,
      title: "1200+",
      extension: "Customers served",
    },
    {
      id: 2,
      title: "85%",
      extension: "Customer satisfaction rate",
    },
    {
      id: 3,
      title: "57+%",
      extension: "Accessories and gadgets available",
    },
  ];

  return (
    <AnimateIntoView>
      <section className="grid p-8 sm:p-12 mt-20 md:p-16 md:grid-cols-3 gap-16 md:gap-4 items-center bg-gradient-to-r from-black via-purple-800 to-purple-500">
        {metrics.map((metric: Metric) => (
          <article key={metric.id} className="flex flex-col gap-2 items-center">
            <h4 className="text-5xl text-white font-semibold">
              {metric.title}
            </h4>
            <p className="text-slate-300 text-lg">{metric.extension}</p>
          </article>
        ))}
      </section>
    </AnimateIntoView>
  );
}

export default Metrics;
