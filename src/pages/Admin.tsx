import { useState } from 'react';
import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { downloadWordPressExportData } from '../utils/wordpress-export';
import { Database, Download, FileJson } from 'lucide-react';

export function Admin() {
  const [exporting, setExporting] = useState(false);
  const [message, setMessage] = useState('');

  const handleExport = async () => {
    try {
      setExporting(true);
      setMessage('Exporting data...');
      await downloadWordPressExportData();
      setMessage('Export successful! Check your downloads folder.');
    } catch (error) {
      setMessage('Error exporting data. Please try again.');
      console.error(error);
    } finally {
      setExporting(false);
      setTimeout(() => setMessage(''), 5000);
    }
  };

  return (
    <div className="min-h-screen bg-light">
      <section className="bg-navy text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Database className="w-16 h-16 mx-auto mb-4 text-blue-soft" />
          <h1 className="text-4xl sm:text-5xl font-semibold mb-6">CMS Administration</h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            Content management and WordPress migration tools
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <Card>
              <Database className="w-10 h-10 text-navy mb-4" />
              <h3 className="text-xl font-semibold text-navy mb-3">Content Database</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                All content is stored in Supabase with tables for pages, posts, services, and settings.
              </p>
              <p className="text-sm text-gray-600">
                Manage content directly in Supabase Dashboard or build a custom admin interface.
              </p>
            </Card>

            <Card>
              <FileJson className="w-10 h-10 text-navy mb-4" />
              <h3 className="text-xl font-semibold text-navy mb-3">WordPress Ready</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Content structure is designed to be easily exported and imported into WordPress.
              </p>
              <p className="text-sm text-gray-600">
                Export to JSON format compatible with WordPress import plugins.
              </p>
            </Card>
          </div>

          <div className="bg-white rounded-lg p-8 lg:p-12 shadow-sm mb-8">
            <h2 className="text-3xl font-semibold text-navy mb-6">Export to WordPress</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Export all content from Supabase in a WordPress-compatible JSON format. This includes:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 mb-8">
              <li>All pages with metadata</li>
              <li>All posts/insights with categories</li>
              <li>Services and offerings</li>
              <li>Site settings and configuration</li>
            </ul>

            <div className="flex flex-col sm:flex-row gap-4 items-start">
              <button
                onClick={handleExport}
                disabled={exporting}
                className="inline-flex items-center gap-2 px-8 py-3 bg-navy text-white font-medium rounded-sm hover:bg-navy-light transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Download size={20} />
                {exporting ? 'Exporting...' : 'Download WordPress Export'}
              </button>
              {message && (
                <div className="px-4 py-3 bg-blue-soft/10 text-navy rounded-sm">
                  {message}
                </div>
              )}
            </div>
          </div>

          <div className="bg-light-bg rounded-lg p-8">
            <h3 className="text-xl font-semibold text-navy mb-4">Migration Instructions</h3>
            <ol className="list-decimal list-inside space-y-3 text-gray-700">
              <li>Click "Download WordPress Export" to export all content</li>
              <li>Install WordPress on your hosting platform</li>
              <li>Install the "WP All Import" or similar JSON import plugin</li>
              <li>Import the downloaded JSON file using the plugin</li>
              <li>Review and adjust the imported content as needed</li>
              <li>Configure your WordPress theme to match the Stratri design</li>
            </ol>
          </div>

          <div className="mt-8 bg-amber/10 border border-amber/30 rounded-lg p-6">
            <h4 className="font-semibold text-navy mb-2">Content Management</h4>
            <p className="text-sm text-gray-700">
              To manage content, visit your{' '}
              <a
                href={import.meta.env.VITE_SUPABASE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-navy font-medium hover:text-blue-soft underline"
              >
                Supabase Dashboard
              </a>{' '}
              and navigate to the Table Editor. You can edit pages, posts, services, and settings directly.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-light-bg">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-semibold text-navy mb-6">Database Structure</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white rounded-lg p-6 text-left">
              <h3 className="font-semibold text-navy mb-2">Tables</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• pages</li>
                <li>• posts</li>
                <li>• services</li>
                <li>• settings</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg p-6 text-left">
              <h3 className="font-semibold text-navy mb-2">Features</h3>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Row Level Security (RLS)</li>
                <li>• Auto timestamps</li>
                <li>• JSON content storage</li>
                <li>• Publish/draft status</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
