import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import { Button } from '../components/Button';

interface Service {
  id: string;
  title: string;
  subtitle: string;
  slug: string;
  icon_type: string;
  intro: string;
  points: string[];
  order_index: number;
  published: boolean;
}

interface RailwayQuestion {
  id: string;
  letter: string;
  title: string;
  description: string;
  sort_order: number;
  published: boolean;
}

interface Insight {
  id: string;
  title: string;
  slug: string;
  summary: string;
  content: string;
  category: string;
  type: string;
  date: string;
  reading_time: string;
  illustration_type: string;
  published: boolean;
}

interface Principle {
  id: string;
  title: string;
  description: string;
  sort_order: number;
  published: boolean;
}

export function AdminCMS() {
  const [activeTab, setActiveTab] = useState('services');
  const [services, setServices] = useState<Service[]>([]);
  const [railwayQuestions, setRailwayQuestions] = useState<RailwayQuestion[]>([]);
  const [insights, setInsights] = useState<Insight[]>([]);
  const [principles, setPrinciples] = useState<Principle[]>([]);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState('');

  useEffect(() => {
    loadData();
  }, []);

  async function loadData() {
    setLoading(true);
    try {
      const [servicesRes, questionsRes, insightsRes, principlesRes] = await Promise.all([
        supabase.from('services').select('*').order('order_index'),
        supabase.from('railway_questions').select('*').order('sort_order'),
        supabase.from('insights').select('*').order('date', { ascending: false }),
        supabase.from('principles').select('*').order('sort_order'),
      ]);

      if (servicesRes.data) setServices(servicesRes.data);
      if (questionsRes.data) setRailwayQuestions(questionsRes.data);
      if (insightsRes.data) setInsights(insightsRes.data);
      if (principlesRes.data) setPrinciples(principlesRes.data);
    } catch (error) {
      console.error('Error loading data:', error);
      setMessage('Error loading data');
    }
    setLoading(false);
  }

  async function updateService(service: Service) {
    try {
      const { error } = await supabase
        .from('services')
        .update({
          title: service.title,
          subtitle: service.subtitle,
          intro: service.intro,
          points: service.points,
          published: service.published,
        })
        .eq('id', service.id);

      if (error) throw error;
      setMessage('Service updated successfully');
      setTimeout(() => setMessage(''), 3000);
    } catch (error) {
      console.error('Error updating service:', error);
      setMessage('Error updating service');
    }
  }

  async function createInsight(insight: Partial<Insight>) {
    try {
      const { error } = await supabase.from('insights').insert([insight]);
      if (error) throw error;
      setMessage('Insight created successfully');
      loadData();
      setTimeout(() => setMessage(''), 3000);
    } catch (error) {
      console.error('Error creating insight:', error);
      setMessage('Error creating insight');
    }
  }

  return (
    <div className="min-h-screen bg-stratri-cream">
      <div className="bg-stratri-dark text-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <h1 className="font-serif text-4xl font-medium mb-4">Content Management System</h1>
          <p className="font-sans text-stratri-cream/70">Manage all STRATRI website content from this dashboard</p>
        </div>
      </div>

      {message && (
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="bg-[#184A5A] text-white px-6 py-3 rounded-sm">
            {message}
          </div>
        </div>
      )}

      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex gap-4 mb-8 flex-wrap">
          {['services', 'railway', 'insights', 'principles'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 py-3 rounded-sm font-sans font-medium transition-all ${
                activeTab === tab
                  ? 'bg-[#184A5A] text-white'
                  : 'bg-white text-stratri-dark border border-stratri-divider hover:border-stratri-accent'
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {loading ? (
          <div className="text-center py-12">
            <p className="font-sans text-stratri-dark/70">Loading...</p>
          </div>
        ) : (
          <>
            {activeTab === 'services' && (
              <div className="space-y-6">
                <h2 className="font-serif text-2xl font-medium text-stratri-dark mb-4">Service Pillars</h2>
                {services.map((service) => (
                  <ServiceEditor key={service.id} service={service} onSave={updateService} />
                ))}
              </div>
            )}

            {activeTab === 'railway' && (
              <div className="space-y-6">
                <h2 className="font-serif text-2xl font-medium text-stratri-dark mb-4">Railway Questions</h2>
                <p className="font-sans text-sm text-stratri-dark/70 mb-6">
                  These are read-only. To modify, update the database directly.
                </p>
                {railwayQuestions.map((question) => (
                  <div
                    key={question.id}
                    className="bg-white border border-stratri-divider rounded-sm p-6"
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-[#184A5A] rounded-sm flex items-center justify-center flex-shrink-0">
                        <span className="font-serif text-2xl font-medium text-white">
                          {question.letter}
                        </span>
                      </div>
                      <div>
                        <h3 className="font-serif text-xl font-medium text-stratri-dark mb-2">
                          {question.title}
                        </h3>
                        <p className="font-sans text-sm text-stratri-dark/70">
                          {question.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'insights' && (
              <div className="space-y-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="font-serif text-2xl font-medium text-stratri-dark">Insights</h2>
                  <Button onClick={() => {
                    const title = prompt('Insight title:');
                    const slug = prompt('Slug (URL-friendly):');
                    const summary = prompt('Summary:');
                    const category = prompt('Category:');
                    const type = prompt('Type (Report/AI Wrapped/Published Article/Techletter):');

                    if (title && slug && summary && category && type) {
                      createInsight({
                        title,
                        slug,
                        summary,
                        content: 'Add content here...',
                        category,
                        type,
                        date: new Date().toISOString().split('T')[0],
                        published: false,
                      });
                    }
                  }}>
                    Add New Insight
                  </Button>
                </div>
                <div className="grid gap-4">
                  {insights.map((insight) => (
                    <div
                      key={insight.id}
                      className="bg-white border border-stratri-divider rounded-sm p-6"
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h3 className="font-serif text-xl font-medium text-stratri-dark mb-2">
                            {insight.title}
                          </h3>
                          <p className="font-sans text-sm text-stratri-dark/70 mb-2">
                            {insight.summary}
                          </p>
                          <div className="flex gap-4 text-xs font-sans text-stratri-dark/50">
                            <span>{insight.type}</span>
                            <span>•</span>
                            <span>{insight.category}</span>
                            <span>•</span>
                            <span>{insight.date}</span>
                            <span>•</span>
                            <span className={insight.published ? 'text-green-600' : 'text-orange-600'}>
                              {insight.published ? 'Published' : 'Draft'}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'principles' && (
              <div className="space-y-6">
                <h2 className="font-serif text-2xl font-medium text-stratri-dark mb-4">Company Principles</h2>
                <p className="font-sans text-sm text-stratri-dark/70 mb-6">
                  These are read-only. To modify, update the database directly.
                </p>
                {principles.map((principle) => (
                  <div
                    key={principle.id}
                    className="bg-white border border-stratri-divider rounded-sm p-6"
                  >
                    <h3 className="font-serif text-xl font-medium text-stratri-dark mb-3">
                      {principle.title}
                    </h3>
                    <p className="font-sans text-sm text-stratri-dark/70 leading-relaxed">
                      {principle.description}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}

function ServiceEditor({ service, onSave }: { service: Service; onSave: (service: Service) => void }) {
  const [editedService, setEditedService] = useState(service);
  const [isEditing, setIsEditing] = useState(false);

  return (
    <div className="bg-white border border-stratri-divider rounded-sm p-6">
      {!isEditing ? (
        <div>
          <div className="flex items-start justify-between mb-4">
            <div>
              <h3 className="font-serif text-xl font-medium text-stratri-dark">{service.title}</h3>
              <p className="font-serif text-sm italic text-stratri-dark/60">{service.subtitle}</p>
            </div>
            <button
              onClick={() => setIsEditing(true)}
              className="px-4 py-2 bg-[#184A5A] text-white rounded-sm font-sans text-sm hover:bg-[#1d5768] transition-colors"
            >
              Edit
            </button>
          </div>
          <p className="font-sans text-sm text-stratri-dark/70 mb-4">{service.intro}</p>
          <ul className="space-y-2">
            {service.points.map((point, i) => (
              <li key={i} className="font-sans text-sm text-stratri-dark/70">
                • {point}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div className="space-y-4">
          <div>
            <label className="block font-sans text-sm font-medium text-stratri-dark mb-2">
              Title
            </label>
            <input
              type="text"
              value={editedService.title}
              onChange={(e) =>
                setEditedService({ ...editedService, title: e.target.value })
              }
              className="w-full px-4 py-2 border border-stratri-divider rounded-sm font-sans text-sm"
            />
          </div>
          <div>
            <label className="block font-sans text-sm font-medium text-stratri-dark mb-2">
              Subtitle
            </label>
            <input
              type="text"
              value={editedService.subtitle}
              onChange={(e) =>
                setEditedService({ ...editedService, subtitle: e.target.value })
              }
              className="w-full px-4 py-2 border border-stratri-divider rounded-sm font-sans text-sm"
            />
          </div>
          <div>
            <label className="block font-sans text-sm font-medium text-stratri-dark mb-2">
              Introduction
            </label>
            <textarea
              value={editedService.intro}
              onChange={(e) =>
                setEditedService({ ...editedService, intro: e.target.value })
              }
              rows={4}
              className="w-full px-4 py-2 border border-stratri-divider rounded-sm font-sans text-sm"
            />
          </div>
          <div className="flex gap-3">
            <button
              onClick={() => {
                onSave(editedService);
                setIsEditing(false);
              }}
              className="px-6 py-2 bg-[#184A5A] text-white rounded-sm font-sans text-sm hover:bg-[#1d5768] transition-colors"
            >
              Save Changes
            </button>
            <button
              onClick={() => {
                setEditedService(service);
                setIsEditing(false);
              }}
              className="px-6 py-2 bg-white text-stratri-dark border border-stratri-dark rounded-sm font-sans text-sm hover:bg-stratri-light/10 transition-colors"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
