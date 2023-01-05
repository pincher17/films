export interface InputProps {
  id: string
  label?: string
  type: string
  name: string
  value: string | number
  placeholder?: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

