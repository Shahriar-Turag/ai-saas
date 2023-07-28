import { auth } from '@clerk/nextjs';
import { NextResponse } from 'next/server';
import { ChatCompletionRequestMessage, Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
	apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

const instructionMessage: ChatCompletionRequestMessage = {
	role: 'system',
	content:
		'If some answers have various points you should mark it as bullet points or numeric points and it will go one after another in a new line.',
};

export async function POST(req: Request) {
	try {
		const { userId } = auth();
		const body = await req.json();
		const { messages } = body;

		if (!userId) {
			return new NextResponse('Unauthorized', { status: 401 });
		}

		if (!configuration.apiKey) {
			return new NextResponse('OpenAI API key not configured', {
				status: 500,
			});
		}

		if (!messages) {
			return new NextResponse('Messages not provided', {
				status: 400,
			});
		}

		const response = await openai.createChatCompletion({
			model: 'gpt-3.5-turbo',
			messages: [instructionMessage, ...messages],
		});

		return NextResponse.json(response.data.choices[0].message);
	} catch (error) {
		console.log('[CONVERSATION_ERROR]', error);
		return new NextResponse('Internal error', { status: 500 });
	}
}
