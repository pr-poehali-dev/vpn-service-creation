import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const Index = () => {
  const [selectedPlan, setSelectedPlan] = useState<string>('pro');

  const features = [
    {
      icon: 'Shield',
      title: 'Шифрование данных',
      description: 'AES-256 военного уровня защищает все ваши данные'
    },
    {
      icon: 'EyeOff',
      title: 'Защита от утечек IP',
      description: 'Технология Kill Switch блокирует трафик при обрыве VPN'
    },
    {
      icon: 'UserX',
      title: 'Полная анонимность',
      description: 'Политика нулевого логирования и анонимная оплата'
    }
  ];

  const plans = [
    {
      id: 'basic',
      name: 'Базовый',
      price: '299',
      period: 'месяц',
      features: ['1 устройство', '50+ серверов', 'Базовая скорость', 'Email поддержка'],
      popular: false
    },
    {
      id: 'pro',
      name: 'Профессионал',
      price: '499',
      period: 'месяц',
      features: ['5 устройств', '200+ серверов', 'Максимальная скорость', 'Приоритетная поддержка', 'Kill Switch'],
      popular: true
    },
    {
      id: 'premium',
      name: 'Премиум',
      price: '799',
      period: 'месяц',
      features: ['10 устройств', '500+ серверов', 'Выделенный IP', 'VIP поддержка 24/7', 'Kill Switch', 'Двойной VPN'],
      popular: false
    }
  ];

  const faqs = [
    {
      question: 'Что такое VPN и зачем он нужен?',
      answer: 'VPN (Virtual Private Network) создает зашифрованный туннель для вашего интернет-трафика, обеспечивая конфиденциальность и безопасность в сети.'
    },
    {
      question: 'Насколько безопасен ваш VPN?',
      answer: 'Мы используем шифрование AES-256 военного уровня, соблюдаем политику нулевого логирования и имеем функцию Kill Switch для максимальной защиты.'
    },
    {
      question: 'Можно ли использовать VPN на нескольких устройствах?',
      answer: 'Да, в зависимости от выбранного тарифа вы можете подключить от 1 до 10 устройств одновременно.'
    },
    {
      question: 'Какова скорость соединения?',
      answer: 'Наши серверы обеспечивают высокую скорость соединения с минимальной задержкой. Профессиональный и Премиум тарифы предлагают максимальную скорость.'
    }
  ];

  return (
    <div className="min-h-screen">
      <nav className="fixed top-0 w-full z-50 glass-effect border-b border-white/10">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary via-accent to-secondary flex items-center justify-center">
              <Icon name="Shield" className="text-background" size={24} />
            </div>
            <span className="text-2xl font-bold gradient-text">SecureVPN</span>
          </div>
          <div className="hidden md:flex items-center gap-6">
            <a href="#features" className="text-foreground/80 hover:text-foreground transition-colors">О сервисе</a>
            <a href="#pricing" className="text-foreground/80 hover:text-foreground transition-colors">Тарифы</a>
            <a href="#support" className="text-foreground/80 hover:text-foreground transition-colors">Поддержка</a>
            <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity">
              Начать
            </Button>
          </div>
          <Button variant="ghost" className="md:hidden">
            <Icon name="Menu" size={24} />
          </Button>
        </div>
      </nav>

      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/20 via-accent/10 to-transparent pointer-events-none" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/30 rounded-full blur-3xl animate-glow" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/30 rounded-full blur-3xl animate-glow" style={{ animationDelay: '1.5s' }} />
        
        <div className="container mx-auto text-center relative z-10">
          <Badge className="mb-6 bg-primary/20 text-primary border-primary/30 animate-fade-in" variant="outline">
            🚀 Новое поколение VPN
          </Badge>
          <h1 className="text-5xl md:text-7xl font-black mb-6 animate-slide-up">
            <span className="gradient-text">Защита без границ</span>
          </h1>
          <p className="text-xl text-foreground/70 mb-8 max-w-2xl mx-auto animate-slide-up" style={{ animationDelay: '0.2s' }}>
            Максимальная безопасность, анонимность и свобода в интернете. 
            Присоединяйтесь к миллионам пользователей по всему миру.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <Button size="lg" className="bg-gradient-to-r from-primary via-accent to-secondary hover:opacity-90 transition-opacity text-lg px-8">
              <Icon name="Rocket" className="mr-2" size={20} />
              Попробовать бесплатно
            </Button>
            <Button size="lg" variant="outline" className="border-primary/50 hover:bg-primary/10 text-lg px-8">
              <Icon name="Play" className="mr-2" size={20} />
              Смотреть демо
            </Button>
          </div>
          
          <div className="mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold gradient-text mb-2">500+</div>
              <div className="text-foreground/60">Серверов</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold gradient-text mb-2">60+</div>
              <div className="text-foreground/60">Стран</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold gradient-text mb-2">5M+</div>
              <div className="text-foreground/60">Пользователей</div>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Почему выбирают <span className="gradient-text">SecureVPN</span>
            </h2>
            <p className="text-foreground/70 text-lg max-w-2xl mx-auto">
              Передовые технологии защиты и анонимности в интернете
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card 
                key={index}
                className="glass-effect p-8 hover:scale-105 transition-transform duration-300 cursor-pointer group"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-6 group-hover:animate-float">
                  <Icon name={feature.icon as any} className="text-background" size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                <p className="text-foreground/70">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="py-20 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent pointer-events-none" />
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Выберите свой <span className="gradient-text">тариф</span>
            </h2>
            <p className="text-foreground/70 text-lg">
              Прозрачные цены без скрытых платежей
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {plans.map((plan) => (
              <Card 
                key={plan.id}
                className={`p-8 relative transition-all duration-300 ${
                  plan.popular 
                    ? 'glass-effect gradient-border scale-105' 
                    : 'bg-card/50 hover:scale-105'
                }`}
              >
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary to-accent">
                    Популярный
                  </Badge>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-5xl font-black gradient-text">{plan.price}</span>
                    <span className="text-foreground/60">₽/{plan.period}</span>
                  </div>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <Icon name="CheckCircle2" className="text-primary flex-shrink-0" size={20} />
                      <span className="text-foreground/80">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  className={`w-full ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-primary to-secondary' 
                      : 'bg-primary'
                  }`}
                  onClick={() => setSelectedPlan(plan.id)}
                >
                  Выбрать план
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="support" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Часто задаваемые <span className="gradient-text">вопросы</span>
            </h2>
          </div>

          <Accordion type="single" collapsible className="mb-16">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-border/50">
                <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-foreground/70">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <Card className="glass-effect p-8">
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold mb-2">Остались вопросы?</h3>
              <p className="text-foreground/70">Свяжитесь с нами, и мы поможем вам</p>
            </div>
            <form className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <Input 
                  placeholder="Ваше имя" 
                  className="bg-background/50 border-border/50"
                />
                <Input 
                  type="email" 
                  placeholder="Email" 
                  className="bg-background/50 border-border/50"
                />
              </div>
              <Input 
                placeholder="Тема обращения" 
                className="bg-background/50 border-border/50"
              />
              <Textarea 
                placeholder="Ваш вопрос" 
                rows={5}
                className="bg-background/50 border-border/50"
              />
              <Button className="w-full bg-gradient-to-r from-primary to-secondary">
                <Icon name="Send" className="mr-2" size={20} />
                Отправить сообщение
              </Button>
            </form>
          </Card>
        </div>
      </section>

      <footer className="border-t border-border/50 py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                  <Icon name="Shield" className="text-background" size={20} />
                </div>
                <span className="text-xl font-bold gradient-text">SecureVPN</span>
              </div>
              <p className="text-foreground/60 text-sm">
                Защита вашей конфиденциальности — наш приоритет
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Продукт</h4>
              <ul className="space-y-2 text-foreground/60 text-sm">
                <li><a href="#" className="hover:text-primary transition-colors">Возможности</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Тарифы</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Приложения</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Компания</h4>
              <ul className="space-y-2 text-foreground/60 text-sm">
                <li><a href="#" className="hover:text-primary transition-colors">О нас</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Блог</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Карьера</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Поддержка</h4>
              <ul className="space-y-2 text-foreground/60 text-sm">
                <li><a href="#" className="hover:text-primary transition-colors">Справка</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Контакты</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Статус</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border/50 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-foreground/60 text-sm">
              © 2024 SecureVPN. Все права защищены.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-foreground/60 hover:text-primary transition-colors">
                <Icon name="Github" size={20} />
              </a>
              <a href="#" className="text-foreground/60 hover:text-primary transition-colors">
                <Icon name="Twitter" size={20} />
              </a>
              <a href="#" className="text-foreground/60 hover:text-primary transition-colors">
                <Icon name="Linkedin" size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
