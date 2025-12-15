import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

const ContactFooter = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: '', phone: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заявка отправлена!",
      description: "Мы свяжемся с вами в ближайшее время",
    });
    setFormData({ name: '', phone: '', message: '' });
  };

  return (
    <>
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
    </>
  );
};

export default ContactFooter;
