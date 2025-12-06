import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [scanProgress, setScanProgress] = useState(0);
  const [isScanning, setIsScanning] = useState(false);
  const [securityScore, setSecurityScore] = useState<number | null>(null);

  const startSecurityScan = () => {
    setIsScanning(true);
    setScanProgress(0);
    setSecurityScore(null);

    const interval = setInterval(() => {
      setScanProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsScanning(false);
          const score = Math.floor(Math.random() * 40) + 60;
          setSecurityScore(score);
          return 100;
        }
        return prev + 10;
      });
    }, 300);
  };

  const getSecurityLevel = (score: number) => {
    if (score >= 90) return { level: 'Отлично', color: 'bg-green-500', icon: 'ShieldCheck' };
    if (score >= 70) return { level: 'Хорошо', color: 'bg-blue-500', icon: 'Shield' };
    if (score >= 50) return { level: 'Средне', color: 'bg-yellow-500', icon: 'ShieldAlert' };
    return { level: 'Критично', color: 'bg-red-500', icon: 'ShieldX' };
  };

  const technologies = [
    {
      title: 'Файрвол нового поколения',
      description: 'Интеллектуальная защита периметра с глубокой инспекцией трафика',
      icon: 'Flame',
      gradient: 'from-cyan-500 to-blue-600'
    },
    {
      title: 'AI-детектор угроз',
      description: 'Машинное обучение для выявления аномалий в реальном времени',
      icon: 'Brain',
      gradient: 'from-purple-500 to-pink-600'
    },
    {
      title: 'Шифрование данных',
      description: 'Криптографическая защита по стандартам AES-256',
      icon: 'Lock',
      gradient: 'from-pink-500 to-rose-600'
    },
    {
      title: 'Zero Trust архитектура',
      description: 'Постоянная верификация каждого запроса без доверия по умолчанию',
      icon: 'ShieldCheck',
      gradient: 'from-blue-500 to-cyan-600'
    }
  ];

  return (
    <div className="min-h-screen bg-[#1A1F2C] relative overflow-hidden">
      <div className="cyber-grid absolute inset-0 opacity-30"></div>
      
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-primary/20 rounded-full blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative z-10">
        <section className="container mx-auto px-4 py-20 text-center">
          <Badge className="mb-6 bg-primary/10 text-primary border-primary/30 glow-border animate-pulse">
            <Icon name="Shield" size={16} className="mr-2" />
            Киберзащита будущего
          </Badge>
          
          <h1 className="text-6xl md:text-8xl font-black mb-6 text-gradient glow-text">
            CYBER SECURITY
          </h1>
          
          <p className="text-xl md:text-2xl text-primary/80 max-w-3xl mx-auto mb-12 font-light">
            Защита нового поколения для цифрового мира. 
            Передовые технологии безопасности на страже ваших данных.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-white glow-border text-lg px-8 py-6 transition-all hover:scale-105"
            >
              <Icon name="Rocket" size={24} className="mr-2" />
              Начать защиту
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-primary text-primary hover:bg-primary/10 text-lg px-8 py-6 transition-all hover:scale-105"
            >
              <Icon name="Info" size={24} className="mr-2" />
              Узнать больше
            </Button>
          </div>

          <div className="max-w-5xl mx-auto rounded-2xl overflow-hidden glow-border">
            <img 
              src="https://cdn.poehali.dev/projects/e999bc42-74e0-4e5e-9b86-3f80756c63c6/files/8bf01e74-46af-44dd-ab6a-8e5a90e63104.jpg" 
              alt="Cyber Security Shield" 
              className="w-full h-auto"
            />
          </div>
        </section>

        <section id="scanner" className="container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl font-bold text-center mb-4 text-gradient">
              Сканер безопасности
            </h2>
            <p className="text-center text-primary/70 mb-12 text-lg">
              Проверьте уровень защиты вашей системы за 3 секунды
            </p>

            <Card className="bg-card/50 backdrop-blur-xl border-primary/20 glow-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl text-primary">
                  <Icon name="Scan" size={32} />
                  Интерактивный анализ
                </CardTitle>
                <CardDescription className="text-primary/60">
                  AI-powered сканирование уязвимостей и оценка рисков
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <Button 
                  onClick={startSecurityScan} 
                  disabled={isScanning}
                  className="w-full bg-gradient-to-r from-primary via-secondary to-accent text-white font-bold text-lg py-6 hover:opacity-90 transition-all hover:scale-[1.02] glow-border"
                >
                  <Icon name={isScanning ? "Loader2" : "Play"} size={24} className={`mr-2 ${isScanning ? 'animate-spin' : ''}`} />
                  {isScanning ? 'Сканирование...' : 'Запустить проверку'}
                </Button>

                {isScanning && (
                  <div className="space-y-3 animate-fade-in">
                    <Progress value={scanProgress} className="h-3" />
                    <p className="text-center text-primary/80 font-mono">
                      Анализ системы: {scanProgress}%
                    </p>
                  </div>
                )}

                {securityScore !== null && !isScanning && (
                  <div className="space-y-6 animate-fade-in">
                    <div className="text-center space-y-4">
                      <div className="flex items-center justify-center gap-4">
                        <Icon 
                          name={getSecurityLevel(securityScore).icon as any} 
                          size={48} 
                          className="text-primary animate-pulse"
                        />
                        <div>
                          <p className="text-6xl font-black text-gradient">{securityScore}</p>
                          <p className="text-sm text-primary/60">из 100</p>
                        </div>
                      </div>
                      <Badge className={`${getSecurityLevel(securityScore).color} text-white text-lg px-6 py-2`}>
                        {getSecurityLevel(securityScore).level}
                      </Badge>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 text-center">
                        <Icon name="Lock" size={24} className="mx-auto mb-2 text-green-400" />
                        <p className="text-sm text-primary/70">Защищено</p>
                        <p className="text-2xl font-bold text-primary">{Math.floor(securityScore * 0.7)}</p>
                      </div>
                      <div className="bg-secondary/5 border border-secondary/20 rounded-lg p-4 text-center">
                        <Icon name="AlertTriangle" size={24} className="mx-auto mb-2 text-yellow-400" />
                        <p className="text-sm text-primary/70">Предупреждений</p>
                        <p className="text-2xl font-bold text-secondary">{Math.floor((100 - securityScore) * 0.5)}</p>
                      </div>
                      <div className="bg-accent/5 border border-accent/20 rounded-lg p-4 text-center">
                        <Icon name="ShieldAlert" size={24} className="mx-auto mb-2 text-red-400" />
                        <p className="text-sm text-primary/70">Уязвимостей</p>
                        <p className="text-2xl font-bold text-accent">{Math.floor((100 - securityScore) * 0.3)}</p>
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </section>

        <section id="technologies" className="container mx-auto px-4 py-20">
          <h2 className="text-5xl font-bold text-center mb-4 text-gradient">
            Технологии защиты
          </h2>
          <p className="text-center text-primary/70 mb-16 text-lg">
            Многоуровневая система безопасности на базе AI и квантовых алгоритмов
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {technologies.map((tech, index) => (
              <Card 
                key={index}
                className="bg-card/50 backdrop-blur-xl border-primary/20 hover:border-primary/50 transition-all duration-300 hover:scale-[1.02] glow-border group cursor-pointer"
              >
                <CardHeader>
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${tech.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon name={tech.icon as any} size={32} className="text-white" />
                  </div>
                  <CardTitle className="text-2xl text-primary group-hover:text-gradient transition-all">
                    {tech.title}
                  </CardTitle>
                  <CardDescription className="text-primary/70 text-base">
                    {tech.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="rounded-2xl overflow-hidden glow-border">
              <img 
                src="https://cdn.poehali.dev/projects/e999bc42-74e0-4e5e-9b86-3f80756c63c6/files/5b2caa3b-9691-4b15-a685-c62eb15ddaf8.jpg" 
                alt="Technology Background" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="rounded-2xl overflow-hidden glow-border">
              <img 
                src="https://cdn.poehali.dev/projects/e999bc42-74e0-4e5e-9b86-3f80756c63c6/files/0811f744-b2f9-4ebd-b446-dc08e5ca9cec.jpg" 
                alt="Firewall Protection" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        <footer className="container mx-auto px-4 py-12 border-t border-primary/20">
          <div className="text-center">
            <h3 className="text-3xl font-bold mb-4 text-gradient">CYBER SECURITY</h3>
            <p className="text-primary/60 mb-6">Защита нового поколения • 24/7 мониторинг • AI-технологии</p>
            <div className="flex gap-4 justify-center">
              <Button variant="ghost" size="icon" className="text-primary hover:text-primary/80 hover:bg-primary/10">
                <Icon name="Github" size={24} />
              </Button>
              <Button variant="ghost" size="icon" className="text-primary hover:text-primary/80 hover:bg-primary/10">
                <Icon name="Twitter" size={24} />
              </Button>
              <Button variant="ghost" size="icon" className="text-primary hover:text-primary/80 hover:bg-primary/10">
                <Icon name="Linkedin" size={24} />
              </Button>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
