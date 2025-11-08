import { Telescope } from 'lucide-react'

export function ComingSoon() {
  return (
    <div className='h-svh'>
      <div className='m-auto flex h-full w-full flex-col items-center justify-center gap-2'>
        <Telescope size={72} />
        <h1 className='text-4xl leading-tight font-bold'>Muy pronto!</h1>
        <p className='text-muted-foreground text-center'>
          Esta página aún no se ha creado. <br />
          ¡Estén atentos!
        </p>
      </div>
    </div>
  )
}
