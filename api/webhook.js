/**
 * OSLO MEET - WEBHOOK ENDPOINT
 * Receives form submissions and stores in Supabase
 * Deploy on Vercel/Netlify Functions
 */

export default async function handler(req, res) {
    // Only allow POST
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
        const data = req.body;

        // Validate required fields
        if (!data.companyName || !data.email) {
            return res.status(400).json({ error: 'Missing required fields' });
        }

        // Add metadata
        const enrichedData = {
            ...data,
            submittedAt: new Date().toISOString(),
            source: 'join_form',
            status: 'pending_review',
            matchScore: null, // Will be calculated later
            matches: [] // Will be populated by matching engine
        };

        // === OPTION 1: Supabase (Recommended) ===
        // const { supabase } = require('@supabase/supabase-js');
        // const supabaseClient = supabase(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);
        // const { error } = await supabaseClient.from('companies').insert([enrichedData]);
        // if (error) throw error;

        // === OPTION 2: Log to console (MVP) ===
        console.log('📦 New company registered:', enrichedData);

        // === OPTION 3: Google Sheets (Alternative) ===
        // await appendToGoogleSheet(enrichedData);

        // Generate initial matches (if pool exists)
        // const matches = MatchingEngine.findBestMatches(enrichedData, existingCompanies);
        // enrichedData.matches = matches;

        // Send confirmation email (via Resend/SendGrid)
        // await sendConfirmationEmail(data.email, data.companyName);

        return res.status(200).json({
            success: true,
            message: 'Profile received successfully',
            companyId: Date.now().toString(36) // Temporary ID
        });

    } catch (error) {
        console.error('❌ Webhook error:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
}
