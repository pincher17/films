export interface InputProps {
  id: string
  label?: string
  type: string
  name: string
  value: string | number
  placeholder?: string
  error?: boolean
  helperText?: string
  visibility?: boolean
  visibilityIcon?: boolean
  children?: React.ReactNode
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  onBlur?: (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void
  onFocus?: (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void
  onChangeVisibility?: () => void
}

export interface StyledInputProps {
  type: string
  error?: boolean
}

export interface StyledTooltipProps {
  tooltip?: boolean
  children?: string
}
