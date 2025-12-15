import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const Index = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: '', phone: '', message: '' });

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

  return (
    <div className="min-h-screen">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Icon name="Home" className="text-primary" size={28} />
            <span className="font-bold text-xl">ЛандшафтПро</span>
          </div>
          <Button className="bg-primary hover:bg-primary/90">
            <Icon name="Phone" size={18} className="mr-2" />
            Заказать звонок
          </Button>
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
                  <span>+7 (xxx) xxx-xx-xx</span>
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
