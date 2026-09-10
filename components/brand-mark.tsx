import Image from 'next/image';

type BrandMarkProps = {
  size?: number;
  plate?: boolean;
  priority?: boolean;
};

export function BrandMark({
  size = 34,
  plate = false,
  priority = false,
}: BrandMarkProps) {
  return (
    <span
      className={plate ? 'brand-mark has-plate' : 'brand-mark'}
      aria-hidden="true"
    >
      <Image
        src="/logo-mark.png"
        alt=""
        width={size}
        height={size}
        priority={priority}
      />
    </span>
  );
}
