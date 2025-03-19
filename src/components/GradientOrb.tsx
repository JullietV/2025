interface GradientOrbProps {
  from: string;
  to: string;
  size?: string;
  position?: string;
  animation?: string;
}

export default function GradientOrb({ 
  from, 
  to, 
  size = "w-[500px] h-[500px]",
  position = "top-[-250px] right-[-100px]",
  animation = ""
}: GradientOrbProps) {
  const colors = {
    'tw-violet-200': 'rgb(221 214 254)',
    'tw-pink-200': 'rgb(251 207 232)',
    'tw-blue-200': 'rgb(191 219 254)',
    'tw-green-200': 'rgb(187 247 208)',
    'tw-purple-200': 'rgb(233 213 255)',
    'tw-indigo-200': 'rgb(199 210 254)'
  };

  const classNames = () => {
    return `z-[-10] absolute ${position} ${size} rounded-full blur-3xl opacity-30 ${animation}`
  }

  return (
    <div
      className={classNames()}
      style={{
        background: `radial-gradient(circle at center, ${colors[from as keyof typeof colors]} 0%, ${colors[to as keyof typeof colors]} 100%)`
      }}
    />
  );
} 