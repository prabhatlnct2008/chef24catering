import Image from 'next/image';
import Link from 'next/link';

interface CardProps {
  title: string;
  description?: string;
  image?: string;
  href?: string;
  className?: string;
  children?: React.ReactNode;
}

export default function Card({
  title,
  description,
  image,
  href,
  className = '',
  children,
}: CardProps) {
  const content = (
    <div
      className={`bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow ${className}`}
    >
      {image && (
        <div className="relative h-48 w-full">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      )}
      <div className="p-5">
        <h3 className="font-heading text-xl font-semibold text-ink mb-2">{title}</h3>
        {description && <p className="text-gray-600">{description}</p>}
        {children}
      </div>
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="block">
        {content}
      </Link>
    );
  }

  return content;
}
