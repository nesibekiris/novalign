import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { Linkedin } from 'lucide-react';

export function About() {
  const principles = [
    {
      title: 'Technology, Society, Policy',
      description:
        'We work where these three forces converge. Sustainable technology strategy requires navigating technical capability, societal impact, and policy constraints with equal rigor.',
    },
    {
      title: 'Governance as strategy',
      description:
        'Responsible technology and AI governance are not compliance burdens – they are strategic advantages. Organizations that govern well move faster and with greater confidence.',
    },
    {
      title: 'Depth over hype',
      description:
        'We prioritize nuance and long-term thinking over fashion and buzzwords. Turning complexity into clarity requires deep understanding, not shallow excitement.',
    },
    {
      title: 'Literacy as foundation',
      description:
        'AI literacy is how leaders and teams gain real agency. Without understanding across the organization, there can be no meaningful governance, accountability or strategic clarity.',
    },
  ];

  const team = [
    {
      name: 'Dr. Sarah Chen',
      role: 'Founder & Principal',
      bio: 'Former AI policy advisor with 12 years across government, tech, and civil society. Expert in AI governance frameworks and regulatory strategy.',
      linkedin: 'https://www.linkedin.com',
    },
    {
      name: 'Marcus Thompson',
      role: 'Senior Advisor, Strategy & Maturity',
      bio: 'Tech executive turned consultant specializing in AI transformation and organizational capability building across Fortune 500 companies.',
      linkedin: 'https://www.linkedin.com',
    },
    {
      name: 'Dr. Amina Okafor',
      role: 'Senior Researcher',
      bio: 'Research fellow focused on AI ethics, algorithmic fairness, and the societal impacts of machine learning systems.',
      linkedin: 'https://www.linkedin.com',
    },
  ];

  return (
    <div className="min-h-screen bg-light">
      <section className="bg-navy text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-semibold mb-6">About Stratri</h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            AI Governance & Responsible Technology Consultancy
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg p-8 lg:p-12 shadow-sm mb-12">
            <h2 className="text-3xl font-semibold text-navy mb-6">Our purpose</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-4">
                Stratri works at the intersection of technology, society and policy – where responsible AI governance becomes a strategic advantage. We help organizations navigate complexity by building governance structures, literacy programs, and policy strategies that turn ethical technology into competitive strength.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                We believe that responsible technology and AI governance are not constraints, but the foundation for sustainable competitive advantage. Strategic governance of the technology-society-policy triad enables organizations to move with confidence, not fear. Good governance is not about slowing down – it's about moving in the right direction with clarity and purpose.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Through our work in strategy, governance, research and policy, we help technology companies and institutions build the frameworks, capabilities and understanding needed to thrive at the convergence of innovation and responsibility.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-light-bg">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-semibold text-navy mb-4">Our principles</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              The values that guide our work and shape our approach to responsible technology.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {principles.map((principle, index) => (
              <Card key={index}>
                <h3 className="text-xl font-semibold text-navy mb-3">{principle.title}</h3>
                <p className="text-gray-700 leading-relaxed">{principle.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-semibold text-navy mb-4">Team</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Experts across AI strategy, governance, ethics, research and policy.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {team.map((member, index) => (
              <Card key={index} className="text-center">
                <div className="w-20 h-20 bg-light rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-semibold text-navy">
                    {member.name
                      .split(' ')
                      .map((n) => n[0])
                      .join('')}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-navy mb-1">{member.name}</h3>
                <p className="text-sm text-blue-soft font-medium mb-3">{member.role}</p>
                <p className="text-sm text-gray-700 leading-relaxed mb-4">{member.bio}</p>
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-navy hover:text-blue-soft transition-colors"
                  aria-label={`${member.name} on LinkedIn`}
                >
                  <Linkedin size={20} />
                </a>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-light-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-lg p-12 shadow-sm">
            <h2 className="text-3xl font-semibold text-navy mb-4">Work with us</h2>
            <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto leading-relaxed">
              Whether you need strategic advisory, governance design, research, or AI literacy programs – let's explore
              how we can support your organization.
            </p>
            <Button href="/connect">Get in touch</Button>
          </div>
        </div>
      </section>
    </div>
  );
}
