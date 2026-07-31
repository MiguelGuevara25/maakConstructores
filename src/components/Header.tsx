import Image from "next/image";

interface HeaderProps {
  src: string;
  title: string;
  subtitle: string;
  description: string;
}

export default function Header({
  src,
  title,
  subtitle,
  description,
}: HeaderProps) {
  return (
    <section className="relative py-24 bg-maak-dark">
      <div className="absolute inset-0 opacity-20">
        <Image
          fill
          priority
          src={src}
          alt="Servicios de gas natural"
          className="object-cover"
        />
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <span className="inline-block text-maak-yellow font-bold text-sm uppercase tracking-wider mb-3 animate-fade-in-up">
          {title}
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white mb-4 animate-fade-in-up delay-100">
          {subtitle}
        </h1>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto animate-fade-in-up delay-200">
          {description}
        </p>
      </div>
    </section>
  );
}
