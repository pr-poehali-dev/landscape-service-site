import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Slider } from '@/components/ui/slider';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: '', phone: '', message: '' });
  const [sliderPosition, setSliderPosition] = useState(50);
  const [currentBeforeAfter, setCurrentBeforeAfter] = useState(0);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [area, setArea] = useState([100]);

  const services = [
    {
      icon: 'Trees',
      title: 'Ландшафт и озеленение',
      description: 'Планировка участка, газон, растения, дорожки из тротуарной плитки'
    },
    {
      icon: 'Boxes',
      title: 'Бетонные работы',
      description: 'Фундаменты, отмостка, монолитные плиты, стяжки под ключ'
    },
    {
      icon: 'Droplets',
      title: 'Ливнёвка и дренаж',
      description: 'Проектирование и монтаж систем отвода дождевой воды'
    },
    {
      icon: 'Waves',
      title: 'Бассейны',
      description: 'Бетонная чаша, гидроизоляция, отделка любой сложности'
    },
    {
      icon: 'Lightbulb',
      title: 'Освещение территории',
      description: 'Уличные фонари, садовые светильники, архитектурная подсветка'
    },
    {
      icon: 'Box',
      title: '3D-визуализация',
      description: 'Увидите результат до начала работ за 24 часа'
    }
  ];

  const portfolio = [
    {
      image: 'https://cdn.poehali.dev/projects/4c2d8613-85e0-44a6-a373-e603ff312bae/files/2c65bf6f-b526-4534-acf8-89ec60fb5012.jpg',
      title: 'Благоустройство участка',
      description: 'Современное мощение и озеленение'
    },
    {
      image: 'https://cdn.poehali.dev/projects/4c2d8613-85e0-44a6-a373-e603ff312bae/files/bc964676-d04f-4083-b5bb-d1f838a8cb45.jpg',
      title: 'Строительство бассейна',
      description: 'Бетонная чаша с современной отделкой'
    },
    {
      image: 'https://cdn.poehali.dev/projects/4c2d8613-85e0-44a6-a373-e603ff312bae/files/ccc4e113-454e-473c-92ef-2898fe48bb78.jpg',
      title: 'Ливневая канализация',
      description: 'Профессиональная система водоотвода'
    }
  ];

  const beforeAfterProjects = [
    {
      before: 'https://cdn.poehali.dev/projects/4c2d8613-85e0-44a6-a373-e603ff312bae/files/5f4b46ca-204c-451d-836c-3d5990b6c7d9.jpg',
      after: 'https://cdn.poehali.dev/projects/4c2d8613-85e0-44a6-a373-e603ff312bae/files/5f4b46ca-204c-451d-836c-3d5990b6c7d9.jpg',
      title: 'Благоустройство участка'
    },
    {
      before: 'https://cdn.poehali.dev/projects/4c2d8613-85e0-44a6-a373-e603ff312bae/files/576cb92c-af0d-4e19-b03b-f89a435dc94d.jpg',
      after: 'https://cdn.poehali.dev/projects/4c2d8613-85e0-44a6-a373-e603ff312bae/files/576cb92c-af0d-4e19-b03b-f89a435dc94d.jpg',
      title: 'Бетонная площадка'
    },
    {
      before: 'https://cdn.poehali.dev/projects/4c2d8613-85e0-44a6-a373-e603ff312bae/files/1f572fe7-0248-41ce-8342-e4a8f58bfcdb.jpg',
      after: 'https://cdn.poehali.dev/projects/4c2d8613-85e0-44a6-a373-e603ff312bae/files/1f572fe7-0248-41ce-8342-e4a8f58bfcdb.jpg',
      title: 'Строительство бассейна'
    }
  ];

  const servicesPricing = [
    { id: 'landscape', name: 'Ландшафт и озеленение', price: 2500, unit: 'м²' },
    { id: 'concrete', name: 'Бетонные работы', price: 3000, unit: 'м²' },
    { id: 'drainage', name: 'Ливнёвка и дренаж', price: 1800, unit: 'м.п.' },
    { id: 'pool', name: 'Бассейн', price: 150000, unit: 'шт' },
    { id: 'lighting', name: 'Освещение', price: 5000, unit: 'точка' },
    { id: 'visualization', name: '3D-визуализация', price: 25000, unit: 'проект' }
  ];

  const advantages = [
    {
      icon: 'Award',
      title: '10 лет опыта',
      description: 'Работаем с частными территориями, знаем климат и грунты Краснодара'
    },
    {
      icon: 'CheckCircle2',
      title: 'Под ключ',
      description: 'От проекта и согласований до сдачи готового объекта'
    },
    {
      icon: 'Shield',
      title: 'Гарантия качества',
      description: 'Фиксированная смета в договоре и гарантийные обязательства'
    },
    {
      icon: 'Users',
      title: 'Индивидуальный подход',
      description: 'Решения под ваш участок и бюджет с авторским контролем'
    }
  ];

  const steps = [
    { number: '01', title: 'Бесплатный выезд', description: 'Выезд и замер участка' },
    { number: '02', title: '3D-проект', description: 'Концепция, смета и график работ' },
    { number: '03', title: 'Реализация', description: 'Работы с контролем качества' },
    { number: '04', title: 'Сдача объекта', description: 'Приёмка работ и гарантия' }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заявка отправлена!",
      description: "Мы свяжемся с вами в ближайшее время",
    });
    setFormData({ name: '', phone: '', message: '' });
  };

  const toggleService = (serviceId: string) => {
    setSelectedServices(prev => 
      prev.includes(serviceId) 
        ? prev.filter(id => id !== serviceId)
        : [...prev, serviceId]
    );
  };

  const calculateTotal = () => {
    return selectedServices.reduce((total, serviceId) => {
      const service = servicesPricing.find(s => s.id === serviceId);
      return total + (service ? service.price : 0);
    }, 0);
  };

  return (
    <div className="min-h-screen">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Icon name="Home" className="text-primary" size={28} />
            <span className="font-bold text-xl">ЛандшафтПро</span>
          </div>
          <a href="tel:+79292293777">
            <Button className="bg-primary hover:bg-primary/90">
              <Icon name="Phone" size={18} className="mr-2" />
              +7 (929) 229-37-77
            </Button>
          </a>
        </div>
      </header>

      <section className="pt-32 pb-20 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Превратим участок <br />
              <span className="text-primary">в место мечты</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Спроектируем, согласуем и реализуем. Работаем по Краснодару и пригородам, 
              даём гарантию и фиксируем смету в договоре
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8">
                <Icon name="MessageCircle" size={20} className="mr-2" />
                Получить консультацию
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8">
                <Icon name="Eye" size={20} className="mr-2" />
                Смотреть портфолио
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">Наши услуги</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Полный комплекс работ по благоустройству территории
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover-scale border-2 hover:border-primary/50 transition-all">
                <CardContent className="p-6">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <Icon name={service.icon as any} className="text-primary" size={28} />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">Наши работы</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Примеры реализованных проектов в Краснодаре
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {portfolio.map((project, index) => (
              <Card key={index} className="overflow-hidden hover-scale">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-64 object-cover"
                />
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground">{project.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">Почему выбирают нас</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Гарантируем качество и соблюдение сроков
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {advantages.map((adv, index) => (
              <Card key={index} className="text-center border-2 hover:border-secondary/50 transition-all">
                <CardContent className="p-6">
                  <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                    <Icon name={adv.icon as any} className="text-secondary" size={32} />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{adv.title}</h3>
                  <p className="text-muted-foreground text-sm">{adv.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">До и После</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Посмотрите на трансформацию участков наших клиентов
          </p>
          <div className="max-w-4xl mx-auto">
            <Card className="overflow-hidden">
              <div className="relative h-96 bg-muted">
                <div className="absolute inset-0">
                  <img 
                    src={beforeAfterProjects[currentBeforeAfter].before} 
                    alt="До"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div 
                  className="absolute inset-0 overflow-hidden"
                  style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
                >
                  <img 
                    src={beforeAfterProjects[currentBeforeAfter].after} 
                    alt="После"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div 
                  className="absolute top-0 bottom-0 w-1 bg-white shadow-lg cursor-ew-resize z-10"
                  style={{ left: `${sliderPosition}%` }}
                  onMouseDown={(e) => {
                    const container = e.currentTarget.parentElement;
                    if (!container) return;
                    
                    const handleMove = (moveEvent: MouseEvent) => {
                      const rect = container.getBoundingClientRect();
                      const x = moveEvent.clientX - rect.left;
                      const percentage = (x / rect.width) * 100;
                      setSliderPosition(Math.max(0, Math.min(100, percentage)));
                    };
                    
                    const handleUp = () => {
                      document.removeEventListener('mousemove', handleMove);
                      document.removeEventListener('mouseup', handleUp);
                    };
                    
                    document.addEventListener('mousemove', handleMove);
                    document.addEventListener('mouseup', handleUp);
                  }}
                >
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center">
                    <Icon name="MoveHorizontal" size={20} className="text-primary" />
                  </div>
                </div>
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg font-semibold">
                  До
                </div>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg font-semibold">
                  После
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-center mb-4">
                  {beforeAfterProjects[currentBeforeAfter].title}
                </h3>
                <div className="flex justify-center gap-2">
                  {beforeAfterProjects.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentBeforeAfter(index)}
                      className={`w-3 h-3 rounded-full transition-all ${
                        index === currentBeforeAfter ? 'bg-primary w-8' : 'bg-muted-foreground/30'
                      }`}
                    />
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">Калькулятор стоимости</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Рассчитайте примерную стоимость работ
          </p>
          <div className="max-w-3xl mx-auto">
            <Card>
              <CardContent className="p-8">
                <div className="space-y-6">
                  <div>
                    <Label className="text-lg font-semibold mb-4 block">Выберите услуги:</Label>
                    <div className="grid md:grid-cols-2 gap-4">
                      {servicesPricing.map((service) => (
                        <div
                          key={service.id}
                          onClick={() => toggleService(service.id)}
                          className={`p-4 border-2 rounded-lg cursor-pointer transition-all hover-scale ${
                            selectedServices.includes(service.id)
                              ? 'border-primary bg-primary/5'
                              : 'border-border hover:border-primary/50'
                          }`}
                        >
                          <div className="flex items-center justify-between">
                            <div>
                              <div className="font-semibold">{service.name}</div>
                              <div className="text-sm text-muted-foreground">
                                от {service.price.toLocaleString()} ₽/{service.unit}
                              </div>
                            </div>
                            <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                              selectedServices.includes(service.id)
                                ? 'border-primary bg-primary'
                                : 'border-muted-foreground'
                            }`}>
                              {selectedServices.includes(service.id) && (
                                <Icon name="Check" size={16} className="text-white" />
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {selectedServices.length > 0 && (
                    <div className="pt-6 border-t">
                      <div className="flex items-center justify-between text-2xl font-bold mb-4">
                        <span>Примерная стоимость:</span>
                        <span className="text-primary">
                          от {calculateTotal().toLocaleString()} ₽
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground mb-4">
                        * Точная стоимость определяется после выезда специалиста и замера участка
                      </p>
                      <Button className="w-full" size="lg">
                        <Icon name="Phone" size={18} className="mr-2" />
                        Получить точный расчёт
                      </Button>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">Зона обслуживания</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Работаем по Краснодару и пригородам в радиусе 50 км
          </p>
          <div className="max-w-4xl mx-auto">
            <Card className="overflow-hidden">
              <div className="relative h-96 bg-accent/10">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    <div className="absolute inset-0 bg-primary/20 rounded-full animate-ping" style={{ width: '300px', height: '300px' }} />
                    <div className="absolute inset-0 bg-primary/10 rounded-full" style={{ width: '300px', height: '300px' }} />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-white rounded-full w-16 h-16 flex items-center justify-center">
                      <Icon name="MapPin" size={32} />
                    </div>
                  </div>
                </div>
              </div>
              <CardContent className="p-8">
                <div className="grid md:grid-cols-3 gap-6 text-center">
                  <div>
                    <Icon name="MapPin" className="mx-auto mb-2 text-primary" size={32} />
                    <h4 className="font-bold mb-1">Краснодар</h4>
                    <p className="text-sm text-muted-foreground">Все районы города</p>
                  </div>
                  <div>
                    <Icon name="Home" className="mx-auto mb-2 text-secondary" size={32} />
                    <h4 className="font-bold mb-1">Пригороды</h4>
                    <p className="text-sm text-muted-foreground">В радиусе 50 км</p>
                  </div>
                  <div>
                    <Icon name="Clock" className="mx-auto mb-2 text-accent" size={32} />
                    <h4 className="font-bold mb-1">Выезд 24 часа</h4>
                    <p className="text-sm text-muted-foreground">На следующий день</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Как мы работаем</h2>
          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="text-6xl font-bold text-primary/20 mb-4">{step.number}</div>
                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-primary to-primary/80 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-4">Оставьте заявку</h2>
            <p className="text-center text-white/90 mb-8 text-lg">
              Наш специалист свяжется с вами для бесплатной консультации
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input 
                placeholder="Ваше имя"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="bg-white/95 border-0 text-foreground placeholder:text-muted-foreground"
                required
              />
              <Input 
                placeholder="Телефон"
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                className="bg-white/95 border-0 text-foreground placeholder:text-muted-foreground"
                required
              />
              <Textarea 
                placeholder="Опишите ваш проект"
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                className="bg-white/95 border-0 text-foreground placeholder:text-muted-foreground min-h-24"
              />
              <Button 
                type="submit" 
                size="lg" 
                className="w-full bg-white text-primary hover:bg-white/90 font-semibold"
              >
                Отправить заявку
              </Button>
            </form>
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Home" size={24} />
                <span className="font-bold text-lg">ЛандшафтПро</span>
              </div>
              <p className="text-white/70">
                Профессиональное благоустройство частных территорий в Краснодаре
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Контакты</h4>
              <div className="space-y-2 text-white/70">
                <div className="flex items-center gap-2">
                  <Icon name="MapPin" size={18} />
                  <span>Краснодар и пригороды</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Phone" size={18} />
                  <a href="tel:+79292293777" className="hover:text-white transition-colors">+7 (929) 229-37-77</a>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Mail" size={18} />
                  <span>info@landscapepro.ru</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-4">Услуги</h4>
              <ul className="space-y-2 text-white/70">
                <li>Ландшафтный дизайн</li>
                <li>Бетонные работы</li>
                <li>Системы дренажа</li>
                <li>Строительство бассейнов</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/20 pt-8 text-center text-white/60">
            <p>© 2024 ЛандшафтПро. Все права защищены</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;