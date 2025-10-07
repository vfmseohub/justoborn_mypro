
import React, { useState } from 'react';

type SettingsTab = 'general' | 'appearance' | 'social';

const ToggleSwitch: React.FC<{ label: string, enabled: boolean, setEnabled: (e: boolean) => void }> = ({ label, enabled, setEnabled }) => {
    return (
        <label className="flex items-center cursor-pointer">
            <div className="relative">
                <input type="checkbox" className="sr-only" checked={enabled} onChange={() => setEnabled(!enabled)} />
                <div className={`block w-14 h-8 rounded-full transition ${enabled ? 'bg-blue-600' : 'bg-gray-300'}`}></div>
                <div className={`dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition-transform ${enabled ? 'translate-x-full' : ''}`}></div>
            </div>
            <div className="ml-3 text-gray-700 font-medium">{label}</div>
        </label>
    );
};

const Settings: React.FC = () => {
    const [activeTab, setActiveTab] = useState<SettingsTab>('general');
    const [settings, setSettings] = useState({
        siteTitle: 'My Awesome Site',
        tagline: 'Just another great website',
        maintenanceMode: false,
        primaryColor: '#3b82f6',
        logoUrl: 'https://picsum.photos/200/50',
        facebookUrl: 'https://facebook.com',
        twitterUrl: 'https://twitter.com',
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setSettings(prev => ({ ...prev, [name]: value }));
    };

    const handleToggleChange = (name: keyof typeof settings, value: boolean) => {
        setSettings(prev => ({ ...prev, [name]: value }));
    };

    const renderGeneralSettings = () => (
        <div className="space-y-8">
            <div>
                <label htmlFor="siteTitle" className="block text-sm font-medium text-gray-700">Site Title</label>
                <input type="text" name="siteTitle" id="siteTitle" value={settings.siteTitle} onChange={handleInputChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm" />
                <p className="mt-2 text-xs text-gray-500">The main title of your website, displayed in the browser tab.</p>
            </div>
            <div>
                <label htmlFor="tagline" className="block text-sm font-medium text-gray-700">Tagline</label>
                <input type="text" name="tagline" id="tagline" value={settings.tagline} onChange={handleInputChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm" />
                <p className="mt-2 text-xs text-gray-500">A short, catchy phrase describing your website.</p>
            </div>
            <div>
                <p className="text-sm font-medium text-gray-700 mb-2">Maintenance Mode</p>
                <ToggleSwitch label="Enable Maintenance Mode" enabled={settings.maintenanceMode} setEnabled={(val) => handleToggleChange('maintenanceMode', val)} />
                <p className="mt-2 text-xs text-gray-500">Puts your site into a maintenance state, visible only to logged-in admins.</p>
            </div>
        </div>
    );

    const renderAppearanceSettings = () => (
        <div className="space-y-8">
            <div>
                <label htmlFor="logoUrl" className="block text-sm font-medium text-gray-700">Logo URL</label>
                <div className="flex items-center space-x-4 mt-1">
                    <img src={settings.logoUrl} alt="logo" className="h-10 border p-1 rounded-md" />
                    <input type="text" name="logoUrl" id="logoUrl" value={settings.logoUrl} onChange={handleInputChange} className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm" />
                </div>
                <p className="mt-2 text-xs text-gray-500">Enter the URL for your site's logo.</p>
            </div>
            <div>
                <label htmlFor="primaryColor" className="block text-sm font-medium text-gray-700">Primary Color</label>
                <div className="flex items-center mt-1">
                    <input type="color" name="primaryColor" id="primaryColor" value={settings.primaryColor} onChange={handleInputChange} className="h-10 w-10 p-1 border border-gray-300 rounded-md" />
                    <input type="text" value={settings.primaryColor} onChange={handleInputChange} className="ml-2 block w-full max-w-xs rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm" />
                </div>
                <p className="mt-2 text-xs text-gray-500">Choose the main accent color for your website's theme.</p>
            </div>
        </div>
    );
    
    const renderSocialSettings = () => (
        <div className="space-y-8">
            <div>
                <label htmlFor="facebookUrl" className="block text-sm font-medium text-gray-700">Facebook URL</label>
                <input type="text" name="facebookUrl" id="facebookUrl" value={settings.facebookUrl} onChange={handleInputChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm" />
                <p className="mt-2 text-xs text-gray-500">Link to your official Facebook page.</p>
            </div>
            <div>
                <label htmlFor="twitterUrl" className="block text-sm font-medium text-gray-700">Twitter (X) URL</label>
                <input type="text" name="twitterUrl" id="twitterUrl" value={settings.twitterUrl} onChange={handleInputChange} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm" />
                <p className="mt-2 text-xs text-gray-500">Link to your official Twitter (X) profile.</p>
            </div>
        </div>
    );

    return (
        <>
            <div className="flex items-center justify-between mb-8">
                <h1 className="text-3xl font-bold text-gray-800">Theme Settings</h1>
                <button className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75">
                    Save Changes
                </button>
            </div>

            <div className="bg-white rounded-lg shadow-md">
                <div className="border-b border-gray-200">
                    <nav className="-mb-px flex space-x-6 px-6" aria-label="Tabs">
                        <button onClick={() => setActiveTab('general')} className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${activeTab === 'general' ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}>General</button>
                        <button onClick={() => setActiveTab('appearance')} className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${activeTab === 'appearance' ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}>Appearance</button>
                        <button onClick={() => setActiveTab('social')} className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${activeTab === 'social' ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'}`}>Social Links</button>
                    </nav>
                </div>
                <div className="p-8">
                    {activeTab === 'general' && renderGeneralSettings()}
                    {activeTab === 'appearance' && renderAppearanceSettings()}
                    {activeTab === 'social' && renderSocialSettings()}
                </div>
                 <div className="bg-gray-50 px-8 py-4 border-t border-gray-200 flex justify-end">
                     <button className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75">
                        Save Changes
                    </button>
                </div>
            </div>
        </>
    );
};

export default Settings;
