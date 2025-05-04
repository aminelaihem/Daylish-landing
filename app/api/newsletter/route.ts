import { NextResponse } from 'next/server';
import * as SibApiV3Sdk from '@sendinblue/client';

const apiInstance = new SibApiV3Sdk.ContactsApi();
apiInstance.setApiKey(SibApiV3Sdk.ContactsApiApiKeys.apiKey, process.env.BREVO_API_KEY!);

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email) {
      return new NextResponse(
        JSON.stringify({ message: 'Email requis' }),
        { 
          status: 400,
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
    }

    const createContact = new SibApiV3Sdk.CreateContact();
    createContact.email = email;
    createContact.listIds = [parseInt(process.env.BREVO_LIST_ID!)];
    createContact.updateEnabled = true;

    await apiInstance.createContact(createContact);

    return new NextResponse(
      JSON.stringify({ message: 'Inscription réussie' }),
      { 
        status: 201,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  } catch (error: any) {
    console.error('Erreur newsletter:', error);
    
    // Gestion des erreurs spécifiques de Brevo
    if (error.response?.body?.code === 'duplicate_parameter') {
      return new NextResponse(
        JSON.stringify({ message: 'Cette adresse email est déjà inscrite' }),
        { 
          status: 400,
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
    }

    return new NextResponse(
      JSON.stringify({ message: 'Une erreur est survenue lors de l\'inscription' }),
      { 
        status: 500,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  }
} 