import { Button } from '../components/Button';
import { Card } from '../components/Card';

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


  return (
    <div className="min-h-screen bg-light">
      <section className="bg-navy text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-semibold mb-6">About Stratri</h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            Technology Policy & AI governance Consultancy
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg p-8 lg:p-12 shadow-sm mb-12">
            <h2 className="text-3xl font-semibold text-navy mb-6">About Stratri</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-4">
                Stratri is an AI governance and responsible technology consultancy. It works at the intersection of technology, society and policy, helping organizations turn governance, ethics and policy into strategic advantage.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Stratri supports technology companies, public institutions and civil society organizations that need to navigate AI maturity, governance frameworks, and fast-moving policy environments. The firm believes that responsible technology and AI governance are not constraints, but the foundation for sustainable competitive advantage.
              </p>
              <p className="text-gray-700 leading-relaxed">
                The firm combines strategic advisory, research, literacy and policy work into a single, integrated practice. Through this approach, Stratri helps organizations build the frameworks, capabilities and understanding needed to thrive at the convergence of innovation and responsibility.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg p-8 lg:p-12 shadow-sm mb-12">
            <h2 className="text-3xl font-semibold text-navy mb-6">Managing Partner</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-4">
                <span className="font-semibold text-navy">Nesibe Kırış Can</span> is a consultant and researcher specializing in AI governance, public policy, and emerging technology regulation. With a background in law and sociology, she helps organizations build responsible AI systems, strengthen regulatory alignment, and design governance frameworks that balance innovation with societal impact.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                She serves as a Responsible AI Consultant at Pandora's Global AI Enablement team, advising on AI governance architecture, ethical risk management, and compliance readiness. In addition to her corporate advisory work, she collaborates with international research institutions as a Research Fellow, contributing to global analyses on democratic governance, digital policy, and the societal implications of AI. She holds the AI Governance Professional certification and has completed executive programs in AI governance and technology policy at Oxford and Cambridge.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Earlier, Kırış Can led public policy and corporate affairs initiatives for multinational technology companies. At the American Chamber of Commerce Türkiye, where she advanced to Government Affairs Director, she represented over 140 global firms on strategic policy issues. She led high-level delegations, co-developed national policy recommendations, and launched the HBR Türkiye AI Webinar Series to strengthen dialogue between industry and government.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Before that, she began her professional journey at Ussal Consultancy, focusing on technology regulation and digital transformation policy. She later played a central role as Corporate and Public Affairs Lead at Istanbul's first Web3 hub, where she established international partnerships, supported early-stage startups, and helped grow a community of more than 450 innovators across blockchain and AI.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Kırış Can is the founder of TechLetter, a global technology policy newsletter followed by more than 7,900 readers from over 65 countries. Her writing and commentary appear widely, including in Harvard Business Review Türkiye, CoinDesk, and numerous international and local media outlets. She regularly provides insights on AI governance, blockchain regulation, and the evolving digital economy.
              </p>
              <p className="text-gray-700 leading-relaxed">
                She has mentored over a dozen startups through programs such as Hackquarters and Başlangıç Noktası, advising on regulatory strategy, scaling, and responsible innovation. Kırış Can has spoken at more than 30 global and regional events—including Bloomberg and CNBC-e—and delivers training programs on AI ethics, governance, and emerging tech regulation to corporate teams, policymakers, and civil society organizations.
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


      <section className="py-20 bg-light-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-lg p-12 shadow-sm">
            <h2 className="text-3xl font-semibold text-navy mb-4">Work with Stratri</h2>
            <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto leading-relaxed">
              Whether you need strategic advisory, governance design, research, or AI literacy programs – let's explore how Stratri can support your organization at the intersection of technology, society and policy.
            </p>
            <Button href="/connect">Get in touch</Button>
          </div>
        </div>
      </section>
    </div>
  );
}
