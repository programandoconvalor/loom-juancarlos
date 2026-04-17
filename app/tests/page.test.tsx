import { render, screen } from '@testing-library/react'
import Home from '@/app/page'

// mock de componentes (clave 🔥)
jest.mock('@/app/components/homepage/hero-section', () => () => <div>HeroSection</div>)
jest.mock('@/app/components/homepage/about', () => () => <div>AboutSection</div>)
jest.mock('@/app/components/homepage/experience', () => () => <div>Experience</div>)
jest.mock('@/app/components/homepage/skills', () => () => <div>Skills</div>)
jest.mock('@/app/components/homepage/projects', () => () => <div>Projects</div>)
jest.mock('@/app/components/homepage/assistant', () => () => <div>Assistant</div>)
jest.mock('@/app/components/homepage/education', () => () => <div>Education</div>)
jest.mock('@/app/components/homepage/contact', () => () => <div>Contact</div>)

describe('Home Page', () => {
  it('renders all sections', async () => {
    render(await Home())

    expect(screen.getByText('HeroSection')).toBeInTheDocument()
    expect(screen.getByText('AboutSection')).toBeInTheDocument()
    expect(screen.getByText('Experience')).toBeInTheDocument()
    expect(screen.getByText('Skills')).toBeInTheDocument()
    expect(screen.getByText('Projects')).toBeInTheDocument()
    expect(screen.getByText('Assistant')).toBeInTheDocument()
    expect(screen.getByText('Education')).toBeInTheDocument()
    expect(screen.getByText('Contact')).toBeInTheDocument()
  })
})