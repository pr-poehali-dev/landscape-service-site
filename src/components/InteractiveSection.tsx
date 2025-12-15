import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';

const InteractiveSection = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [currentBeforeAfter, setCurrentBeforeAfter] = useState(0);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

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
    <>
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
    </>
  );
};

export default InteractiveSection;
