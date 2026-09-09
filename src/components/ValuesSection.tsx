'use client';

const ValuesSection = () => {
  const values = [
    {
      title: 'Пояснювати просто',
      description: 'Без зайвої бюрократичної мови.',
    },
    {
      title: 'Перевіряти першоджерела',
      description: 'Вимоги можуть відрізнятися залежно від університету та програми.',
    },
    {
      title: 'Не обіцяти неможливого',
      description: 'Рішення про зарахування приймає університет.',
    },
    {
      title: 'Залишати процес зрозумілим',
      description: 'Абітурієнт має розуміти, на якому він етапі та що робити далі.',
    },
  ];

  return (
    <section className="py-20 md:py-32 px-4 md:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-text mb-16 text-center">
          Що для мене важливо в роботі
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="p-8 bg-gradient-to-br from-lavender/20 to-sky/20 rounded-2xl border border-lavender/40 hover:border-lavender transition-all duration-300"
            >
              <h3 className="text-2xl font-semibold text-text mb-3">
                {value.title}
              </h3>
              <p className="text-text-secondary leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;
