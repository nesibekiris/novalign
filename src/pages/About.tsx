import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { Linkedin } from 'lucide-react';

export function About() {
  const principles = [
    {
      title: 'Depth over hype',
      description:
        'We prioritize nuance and long-term thinking over fashion and buzzwords. AI is complex, and good strategy and governance require deep understanding, not shallow excitement.',
    },
    {
      title: 'Alignment over speed',
      description:
        'We care about moving in the right direction, not just faster. Technology must be aligned with organizational values, societal interests, and ethical foundations.',
    },
    {
      title: 'Ethics as infrastructure',
      description:
        'Ethics and governance are built into systems and processes, not added on top. They are foundational infrastructure, not afterthoughts or compliance exercises.',
    },
    {
      title: 'Literacy as power',
      description:
        'AI literacy is how leaders and teams gain real agency in AI decisions. Without understanding, there can be no meaningful governance, accountability or strategic clarity.',
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
          <h1 className="text-4xl sm:text-5xl font-semibold mb-6">About Novalign</h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            A studio working at the intersection of AI strategy, governance, ethics, literacy and policy.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg p-8 lg:p-12 shadow-sm mb-12">
            <h2 className="text-3xl font-semibold text-navy mb-6">Our purpose</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-4">
                Novalign exists to help organizations align AI and technology with their values, strategy, and the
                public interest. We work where innovation meets responsibility – designing the structures, frameworks,
                and capabilities that make AI both powerful and trustworthy.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                We believe that good AI governance is not about slowing down, but about moving in the right direction.
                It requires deep understanding, thoughtful design, and real literacy across leadership and teams. It
                demands a balance between enabling innovation and ensuring accountability, transparency, and ethics.
              </p>
              <p className="text-gray-700 leading-relaxed">
                As both a thought and consulting studio, we produce research, frameworks, and literacy resources – and
                we work hands-on with organizations to design and embed AI strategy, governance, and policy approaches
                that actually work in practice.
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
              The values that guide our work and shape our approach to AI governance and policy.
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
