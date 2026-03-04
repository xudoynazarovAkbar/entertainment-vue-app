import { configure, defineRule } from 'vee-validate'
import { required, email, min } from '@vee-validate/rules'
import { assertArray } from '@/utils/types/assertMinLength'

export default function setupVeeValidate() {
  defineRule('required', required)
  defineRule('email', email)
  defineRule('min', min)
}

configure({
  generateMessage: (ctx) => {
    switch (ctx.rule?.name) {
      case 'required':
        return 'This field is required'
      case 'email':
        return 'Enter a valid email'
      case 'min':
        assertArray<number | string>(ctx.rule?.params)
        const minLength = ctx.rule.params![0]
        return `At least ${minLength} characters are required`
      default:
        return 'This field is invalid'
    }
  },
})
