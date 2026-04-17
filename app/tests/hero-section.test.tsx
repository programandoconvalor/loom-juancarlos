import { render, screen } from '@testing-library/react'
import HeroSection from '@/app/components/homepage/hero-section'

// mocks 👇
jest.mock('@/app/context/language-context', () => ({
  useLanguage: () => ({
    language: 'en',
    t: {
      hero: {
        role: 'Full Stack Developer',
        roleComplement: 'Test',
        tagline: 'Test tagline',
        highlights: ['✔ Test'],
        contact: 'Contact',
        resume: 'Download Resume'
      }
    }
  })
}))

jest.mock('next/link', () => {
  return ({ children, href, ...props }: any) => {
    return <a href={href} {...props}>{children}</a>
  }
})

describe('HeroSection Buttons', () => {

  beforeEach(() => {
    render(<HeroSection />)
  })

  it('should render LinkedIn button with correct link', () => {
    const link = screen.getByLabelText(/linkedin/i)
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('href')
  })

  it('should render WhatsApp button with correct link', () => {
    const link = screen.getByLabelText(/whatsapp/i)
    expect(link).toBeInTheDocument()
    expect(link).toHaveAttribute('href')
  })

  it('should render Contact button', () => {
    const button = screen.getByText(/contact/i)
    expect(button).toBeInTheDocument()

    const link = button.closest('a')
    expect(link).toHaveAttribute('href', '#projects')
  })

  it('should render Download CV button with correct file', () => {
    const button = screen.getByText(/download resume/i)

    const link = button.closest('a')

    expect(link).toHaveAttribute(
      'href',
      '/pdf/Juan_Carlos_Zepeda_FullStack_EN.pdf'
    )

    expect(link).toHaveAttribute(
      'download',
      'Juan_Carlos_Zepeda_CV_EN.pdf'
    )
  })

})

