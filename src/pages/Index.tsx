import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [targetWeight, setTargetWeight] = useState('');
  const [calculatorResult, setCalculatorResult] = useState<any>(null);

  const calculateIdealWeight = () => {
    const h = parseFloat(height);
    const w = parseFloat(weight);
    const tw = parseFloat(targetWeight);

    if (h && w && tw) {
      const bmi = (w / ((h / 100) ** 2)).toFixed(1);
      const idealBMI = (tw / ((h / 100) ** 2)).toFixed(1);
      const weeksToGoal = Math.ceil(Math.abs(w - tw) / 0.5);
      const calorieDeficit = Math.abs(w - tw) * 7700 / weeksToGoal / 7;

      setCalculatorResult({
        currentBMI: bmi,
        idealBMI: idealBMI,
        weightToLose: (w - tw).toFixed(1),
        weeks: weeksToGoal,
        calorieDeficit: Math.round(calorieDeficit)
      });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section 
        className="py-24 px-4 sm:px-6 lg:px-8 relative bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://cdn.poehali.dev/files/a4ef76f5e97c11f0b8b716ff1222dddb_1.jpg)',
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative max-w-4xl mx-auto text-center z-10">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-8 text-white drop-shadow-lg">
            Здоровое похудение
          </h1>
          <p className="text-xl sm:text-2xl text-white mb-12 max-w-2xl mx-auto font-light drop-shadow-md">
            Индивидуальная программа с научным подходом и гарантированным результатом
          </p>
          <Button size="lg" className="telegram-blue text-white text-lg px-10 py-6 rounded-lg shadow-lg hover:shadow-xl transition-all">
            <Icon name="Send" size={20} className="mr-2" />
            Подписаться в Telegram
          </Button>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16 text-gray-900">
            Преимущества
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: 'Target',
                title: 'Индивидуальный подход',
                description: 'Программа адаптируется под ваш образ жизни и особенности организма'
              },
              {
                icon: 'TrendingUp',
                title: 'Гарантия результата',
                description: '95% клиентов достигают целевого веса в течение 3 месяцев'
              },
              {
                icon: 'Users',
                title: 'Поддержка 24/7',
                description: 'Команда экспертов всегда на связи для консультаций'
              },
              {
                icon: 'Award',
                title: 'Научный подход',
                description: 'Методики основаны на последних исследованиях в диетологии'
              },
              {
                icon: 'Heart',
                title: 'Здоровье прежде всего',
                description: 'Фокус на улучшении общего самочувствия'
              },
              {
                icon: 'Zap',
                title: 'Быстрый старт',
                description: 'Первые результаты заметны через 2 недели'
              }
            ].map((benefit, index) => (
              <Card key={index} className="border-0 shadow-sm hover:shadow-md transition-shadow bg-white">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center mb-4">
                    <Icon name={benefit.icon as any} size={24} className="text-gray-900" />
                  </div>
                  <CardTitle className="text-xl font-semibold text-gray-900">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-gray-600 font-light">
                    {benefit.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 text-gray-900">
            Калькулятор веса
          </h2>
          <p className="text-lg text-gray-600 text-center mb-12 font-light">
            Узнайте свой план достижения цели
          </p>

          <Card className="shadow-sm border-gray-200">
            <CardHeader className="bg-gray-50 border-b border-gray-200">
              <CardTitle className="text-xl text-gray-900">Введите ваши данные</CardTitle>
              <CardDescription className="text-gray-600">
                Мы рассчитаем индивидуальный план похудения
              </CardDescription>
            </CardHeader>
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div className="space-y-2">
                  <Label htmlFor="weight" className="text-sm font-medium text-gray-700">Текущий вес (кг)</Label>
                  <Input
                    id="weight"
                    type="number"
                    placeholder="75"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    className="h-11"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="height" className="text-sm font-medium text-gray-700">Рост (см)</Label>
                  <Input
                    id="height"
                    type="number"
                    placeholder="170"
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                    className="h-11"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="target" className="text-sm font-medium text-gray-700">Целевой вес (кг)</Label>
                  <Input
                    id="target"
                    type="number"
                    placeholder="65"
                    value={targetWeight}
                    onChange={(e) => setTargetWeight(e.target.value)}
                    className="h-11"
                  />
                </div>
              </div>

              <Button 
                onClick={calculateIdealWeight} 
                className="w-full bg-gray-900 text-white hover:bg-gray-800 h-11"
              >
                Рассчитать план
              </Button>

              {calculatorResult && (
                <div className="mt-8 space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-6 bg-gray-50 rounded-lg">
                      <p className="text-sm text-gray-600 mb-1">Нужно сбросить</p>
                      <p className="text-3xl font-bold text-gray-900">{calculatorResult.weightToLose} кг</p>
                    </div>

                    <div className="p-6 bg-gray-50 rounded-lg">
                      <p className="text-sm text-gray-600 mb-1">Срок достижения</p>
                      <p className="text-3xl font-bold text-gray-900">{calculatorResult.weeks} нед</p>
                    </div>

                    <div className="p-6 bg-gray-50 rounded-lg">
                      <p className="text-sm text-gray-600 mb-1">Текущий ИМТ</p>
                      <p className="text-3xl font-bold text-gray-900">{calculatorResult.currentBMI}</p>
                    </div>

                    <div className="p-6 bg-gray-50 rounded-lg">
                      <p className="text-sm text-gray-600 mb-1">Калорий/день</p>
                      <p className="text-3xl font-bold text-gray-900">{calculatorResult.calorieDeficit}</p>
                    </div>
                  </div>

                  <div className="p-6 bg-gray-900 text-white rounded-lg">
                    <h3 className="text-lg font-semibold mb-2">Ваш план готов</h3>
                    <p className="text-gray-300 font-light">
                      При темпе 0.5-1 кг в неделю вы достигнете целевого веса за {calculatorResult.weeks} недель
                    </p>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Program Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16 text-gray-900">
            Программа
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Анализ',
                description: 'Оценка состояния здоровья и образа жизни'
              },
              {
                step: '02',
                title: 'План питания',
                description: 'Индивидуальное меню с учетом предпочтений'
              },
              {
                step: '03',
                title: 'Тренировки',
                description: 'Программа упражнений для дома или зала'
              },
              {
                step: '04',
                title: 'Результат',
                description: 'Достижение цели и закрепление привычек'
              }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-gray-200 mb-4">{item.step}</div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">{item.title}</h3>
                <p className="text-gray-600 font-light">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 text-gray-900">
            Результаты
          </h2>
          <p className="text-lg text-gray-600 text-center mb-16 font-light">
            Более 5000 клиентов достигли своей цели
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Анна', age: '32 года', result: '-18 кг за 3 месяца' },
              { name: 'Сергей', age: '45 лет', result: '-25 кг за 5 месяцев' },
              { name: 'Мария', age: '28 лет', result: '-12 кг за 2 месяца' }
            ].map((person, index) => (
              <Card key={index} className="border-0 shadow-sm bg-gray-50">
                <CardHeader>
                  <div className="w-full h-48 bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
                    <Icon name="User" size={60} className="text-gray-400" />
                  </div>
                  <CardTitle className="text-lg font-semibold text-gray-900">{person.name}, {person.age}</CardTitle>
                  <CardDescription className="text-base font-medium text-gray-900">
                    {person.result}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16 text-gray-900">
            Отзывы
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Елена Петрова',
                text: 'Потрясающая программа! Я смогла похудеть без стресса и голода.'
              },
              {
                name: 'Дмитрий Иванов',
                text: 'Результат превзошел все ожидания. Сбросил 20 кг.'
              },
              {
                name: 'Ольга Смирнова',
                text: 'Индивидуальный подход – это то, что мне было нужно.'
              }
            ].map((review, index) => (
              <Card key={index} className="border-0 shadow-sm bg-white">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center flex-shrink-0">
                      <Icon name="User" size={20} className="text-gray-600" />
                    </div>
                    <CardTitle className="text-base font-semibold text-gray-900">{review.name}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 font-light leading-relaxed">{review.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Начните трансформацию
          </h2>
          <p className="text-lg mb-10 text-gray-300 font-light">
            Присоединяйтесь к тысячам людей, которые изменили свою жизнь
          </p>
          <Button size="lg" className="telegram-blue text-white px-10 py-6 text-lg rounded-lg shadow-sm hover:shadow-md transition-all">
            <Icon name="Send" size={20} className="mr-2" />
            Подписаться в Telegram
          </Button>
        </div>
      </section>
    </div>
  );
}