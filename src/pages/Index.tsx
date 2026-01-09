import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Progress } from '@/components/ui/progress';
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
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 via-pink-600/10 to-orange-600/10"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold mb-6 animate-fade-in">
            <span className="text-gradient">Преображение</span>
            <br />
            начинается сегодня
          </h1>
          <p className="text-xl sm:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto animate-fade-in">
            Индивидуальная программа похудения с гарантированным результатом. 
            Без диет, без стресса, только эффективные методики.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in">
            <Button size="lg" className="gradient-purple text-white text-lg px-8 py-6 hover-lift">
              Начать сейчас
              <Icon name="ArrowRight" size={20} className="ml-2" />
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-2 hover-lift">
              Узнать больше
            </Button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-4">
            Почему выбирают нас
          </h2>
          <p className="text-xl text-gray-600 text-center mb-16 max-w-2xl mx-auto">
            Научный подход и персональное сопровождение на каждом этапе
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: 'Target',
                title: 'Индивидуальный подход',
                description: 'Программа адаптируется под ваш образ жизни, предпочтения и особенности организма',
                gradient: 'gradient-purple'
              },
              {
                icon: 'TrendingUp',
                title: 'Гарантия результата',
                description: '95% клиентов достигают целевого веса в течение 3 месяцев',
                gradient: 'gradient-orange'
              },
              {
                icon: 'Users',
                title: 'Поддержка 24/7',
                description: 'Команда экспертов всегда на связи для консультаций и мотивации',
                gradient: 'gradient-blue'
              },
              {
                icon: 'Award',
                title: 'Научный подход',
                description: 'Методики основаны на последних исследованиях в области диетологии',
                gradient: 'gradient-purple'
              },
              {
                icon: 'Heart',
                title: 'Здоровье прежде всего',
                description: 'Мы фокусируемся на улучшении общего самочувствия, а не только на цифрах',
                gradient: 'gradient-orange'
              },
              {
                icon: 'Zap',
                title: 'Быстрый старт',
                description: 'Первые результаты заметны уже через 2 недели',
                gradient: 'gradient-blue'
              }
            ].map((benefit, index) => (
              <Card key={index} className="hover-lift border-2 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader>
                  <div className={`w-16 h-16 rounded-2xl ${benefit.gradient} flex items-center justify-center mb-4 animate-float`}>
                    <Icon name={benefit.icon as any} size={32} className="text-white" />
                  </div>
                  <CardTitle className="text-2xl">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-gray-600">
                    {benefit.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Calculator Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-100 via-pink-100 to-orange-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-4">
            Калькулятор идеального веса
          </h2>
          <p className="text-xl text-gray-700 text-center mb-12">
            Узнайте свой план достижения цели за 30 секунд
          </p>

          <Card className="shadow-2xl border-0">
            <CardHeader className="gradient-purple text-white rounded-t-xl">
              <CardTitle className="text-2xl text-white">Введите ваши данные</CardTitle>
              <CardDescription className="text-purple-100">
                Мы рассчитаем индивидуальный план похудения
              </CardDescription>
            </CardHeader>
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div className="space-y-2">
                  <Label htmlFor="weight" className="text-lg">Текущий вес (кг)</Label>
                  <Input
                    id="weight"
                    type="number"
                    placeholder="75"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    className="text-lg h-12"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="height" className="text-lg">Рост (см)</Label>
                  <Input
                    id="height"
                    type="number"
                    placeholder="170"
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                    className="text-lg h-12"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="target" className="text-lg">Целевой вес (кг)</Label>
                  <Input
                    id="target"
                    type="number"
                    placeholder="65"
                    value={targetWeight}
                    onChange={(e) => setTargetWeight(e.target.value)}
                    className="text-lg h-12"
                  />
                </div>
              </div>

              <Button 
                onClick={calculateIdealWeight} 
                className="w-full gradient-purple text-white text-lg py-6 hover-lift"
                size="lg"
              >
                <Icon name="Calculator" size={20} className="mr-2" />
                Рассчитать план
              </Button>

              {calculatorResult && (
                <div className="mt-8 space-y-6 animate-scale-in">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Card className="bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-full bg-purple-500 flex items-center justify-center">
                            <Icon name="Scale" size={24} className="text-white" />
                          </div>
                          <div>
                            <p className="text-sm text-gray-600">Нужно сбросить</p>
                            <p className="text-3xl font-bold text-purple-600">{calculatorResult.weightToLose} кг</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="bg-gradient-to-br from-orange-50 to-orange-100 border-orange-200">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-full bg-orange-500 flex items-center justify-center">
                            <Icon name="Calendar" size={24} className="text-white" />
                          </div>
                          <div>
                            <p className="text-sm text-gray-600">Срок достижения</p>
                            <p className="text-3xl font-bold text-orange-600">{calculatorResult.weeks} недель</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center">
                            <Icon name="Activity" size={24} className="text-white" />
                          </div>
                          <div>
                            <p className="text-sm text-gray-600">Текущий ИМТ</p>
                            <p className="text-3xl font-bold text-blue-600">{calculatorResult.currentBMI}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="bg-gradient-to-br from-pink-50 to-pink-100 border-pink-200">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-full bg-pink-500 flex items-center justify-center">
                            <Icon name="Flame" size={24} className="text-white" />
                          </div>
                          <div>
                            <p className="text-sm text-gray-600">Дефицит калорий/день</p>
                            <p className="text-3xl font-bold text-pink-600">{calculatorResult.calorieDeficit}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  <Card className="bg-gradient-to-r from-purple-500 to-pink-500 text-white">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <Icon name="Sparkles" size={32} className="mt-1 flex-shrink-0" />
                        <div>
                          <h3 className="text-xl font-bold mb-2">Ваш персональный план готов!</h3>
                          <p className="text-purple-100">
                            При здоровом темпе похудения (0.5-1 кг в неделю) вы достигнете целевого веса за {calculatorResult.weeks} недель. 
                            Начните прямо сейчас с нашей программой!
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Program Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-4">
            Программа трансформации
          </h2>
          <p className="text-xl text-gray-600 text-center mb-16 max-w-2xl mx-auto">
            Комплексный подход к здоровому похудению
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: '1',
                title: 'Анализ',
                description: 'Оценка состояния здоровья, пищевых привычек и образа жизни',
                icon: 'ClipboardList'
              },
              {
                step: '2',
                title: 'План питания',
                description: 'Индивидуальное меню с учетом ваших предпочтений',
                icon: 'UtensilsCrossed'
              },
              {
                step: '3',
                title: 'Тренировки',
                description: 'Программа упражнений для дома или зала',
                icon: 'Dumbbell'
              },
              {
                step: '4',
                title: 'Результат',
                description: 'Достижение цели и закрепление привычек',
                icon: 'Trophy'
              }
            ].map((item, index) => (
              <Card key={index} className="text-center hover-lift border-2 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-200 to-pink-200 rounded-full -mr-16 -mt-16 opacity-50"></div>
                <CardHeader className="relative">
                  <div className="w-20 h-20 mx-auto rounded-full gradient-purple text-white flex items-center justify-center text-3xl font-bold mb-4 animate-float">
                    {item.step}
                  </div>
                  <CardTitle className="text-2xl mb-2">{item.title}</CardTitle>
                  <div className="w-16 h-16 mx-auto gradient-orange rounded-2xl flex items-center justify-center">
                    <Icon name={item.icon as any} size={28} className="text-white" />
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-4">
            Реальные результаты
          </h2>
          <p className="text-xl text-gray-700 text-center mb-16 max-w-2xl mx-auto">
            Более 5000 довольных клиентов достигли своей цели
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Анна, 32 года', result: '-18 кг за 3 месяца', progress: 95 },
              { name: 'Сергей, 45 лет', result: '-25 кг за 5 месяцев', progress: 88 },
              { name: 'Мария, 28 лет', result: '-12 кг за 2 месяца', progress: 92 }
            ].map((person, index) => (
              <Card key={index} className="hover-lift border-2">
                <CardHeader>
                  <div className="w-full h-64 bg-gradient-to-br from-purple-200 via-pink-200 to-orange-200 rounded-xl mb-4 flex items-center justify-center">
                    <Icon name="User" size={80} className="text-white" />
                  </div>
                  <CardTitle className="text-2xl">{person.name}</CardTitle>
                  <CardDescription className="text-lg font-semibold text-green-600">
                    {person.result}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Прогресс</span>
                      <span className="font-bold">{person.progress}%</span>
                    </div>
                    <Progress value={person.progress} className="h-3" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-16">
            Отзывы клиентов
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: 'Елена Петрова',
                rating: 5,
                text: 'Потрясающая программа! Я наконец-то смогла похудеть без стресса и голода. Спасибо команде за поддержку!'
              },
              {
                name: 'Дмитрий Иванов',
                rating: 5,
                text: 'Результат превзошел все ожидания. Сбросил 20 кг и чувствую себя на 10 лет моложе!'
              },
              {
                name: 'Ольга Смирнова',
                rating: 5,
                text: 'Индивидуальный подход и постоянная поддержка – это то, что мне было нужно. Рекомендую всем!'
              }
            ].map((review, index) => (
              <Card key={index} className="hover-lift border-2">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 rounded-full gradient-purple flex items-center justify-center">
                      <Icon name="User" size={28} className="text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{review.name}</CardTitle>
                      <div className="flex gap-1 mt-1">
                        {[...Array(review.rating)].map((_, i) => (
                          <Icon key={i} name="Star" size={16} className="text-yellow-500 fill-yellow-500" />
                        ))}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 italic">"{review.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-600 via-pink-600 to-orange-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Готовы начать трансформацию?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Присоединяйтесь к тысячам людей, которые уже изменили свою жизнь
          </p>
          <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 text-lg px-12 py-6 hover-lift">
            Начать бесплатную консультацию
            <Icon name="ArrowRight" size={20} className="ml-2" />
          </Button>
        </div>
      </section>
    </div>
  );
}
